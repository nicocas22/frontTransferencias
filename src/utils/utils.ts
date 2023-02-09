//Utilidad de validaciones generales.
export class Utils {
  
  static onlyText(text: string) {
    if (text !== undefined) {
      return text.replace(/[^a-z A-ZÀ-ÿ\u00f1\u00d1]+/, "");
    } else {
      return "";
    }
  }

  static formatMoney(num: number): string {
    const money = num
      .toString()
      .split("")
      .reverse()
      .join("")
      .replace(/(?=\d*\.?)(\d{3})/g, "$1.");
    return money.split("").reverse().join("").replace(/^[\.]/, "");
  }


  static checkObjectNulity(obj: any): boolean {
    for (let key in obj) {
      if (obj[key] !== null && obj[key] !== undefined && obj[key] !== "") {
        return false;
      }
    }
    return true;
  }

  static cleanTextForSearch(text: string): string {
    text = String(text).toLocaleLowerCase();
    return text
      .split("á")
      .join("a")
      .split("é")
      .join("e")
      .split("í")
      .join("i")
      .split("ó")
      .join("o")
      .split("ú")
      .join("u")
      .split("ü")
      .join("u")
      .split("ñ")
      .join("n")
      .split(" ")
      .join("");
  }

  static ValidateRut(rutCompleto: string) {
      try {
        rutCompleto = rutCompleto.replace("‐", "-");
        rutCompleto = rutCompleto.split("-").join("");
        rutCompleto = rutCompleto.split(".").join("");
        rutCompleto =
          rutCompleto.substr(0, rutCompleto.length - 1) +
          "-" +
          rutCompleto.substr(rutCompleto.length - 1, 1);
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) {
          return false;
        }
  
        var tmp = rutCompleto.split("-");
        var digv = tmp[1];
        var rut = parseInt(tmp[0], 10);
        if (digv == "K") digv = "k";
  
        if (rut.valueOf() < 100000 || rut.valueOf() > 99999999) {
          return false;
        }
        return this.ValidateDv(rut) == digv;
      } catch {
        return false;
      }
    }

  static ValidateDv (T: number) {
    var M = 0,
      S = 1;
    for (; T; T = Math.floor(T / 10)) S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
    return S ? S - 1 : "k";
  }
}
