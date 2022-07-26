import isString from 'lodash-es/isString';
import hexToDecimal from './hexToDecimal';

interface IRGBA {
  r: number;
  g: number;
  b: number;
  alpha?: number;
}

export class RGBA implements IRGBA {
  r = 0;
  g = 0;
  b = 0;
  alpha = 1;

  constructor(rgba: IRGBA);
  constructor(color: string);
  constructor(
    r: number | string,
    g: number | string,
    b: number | string,
    alpha?: number | string
  );
  constructor(...args: any[]) {
    if (args.length >= 3) {
      const [r, g, b, alpha = 1] = args;

      this.r = r;
      this.g = g;
      this.b = b;
      this.alpha = alpha;
    } else {
      if (isString(args[0])) {
        const rgba = args[0].replace(/\s/gi, '');
        const isHex = /^#(.{6}|.{8}|.{3})$/g.test(rgba);

        if (isHex) {
          const hexCodes = rgba.split('#')[1].split('');
          let r,
            g,
            b,
            alpha = 255;

          if (hexCodes.length === 3 || hexCodes.length === 4) {
            const [_r, _g, _b, _a = 'f'] = hexCodes;

            r = hexToDecimal(_r + _r);
            g = hexToDecimal(_g + _g);
            b = hexToDecimal(_b + _b);
            alpha = hexToDecimal(_a + _a);
          } else if (hexCodes.length === 6 || hexCodes.length === 8) {
            const [_r1, _r2, _g1, _g2, _b1, _b2, _a1 = 'f', _a2 = 'f'] =
              hexCodes;

            r = hexToDecimal(_r1 + _r2);
            g = hexToDecimal(_g1 + _g2);
            b = hexToDecimal(_b1 + _b2);
            alpha = hexToDecimal(_a1 + _a2);
          }

          this.r = r as number;
          this.g = g as number;
          this.b = b as number;
          this.alpha = parseFloat((alpha / 255).toFixed(2));
        } else {
          throw new Error('16진수 코드 혹은 rgb, rgba 함수 형태여야 합니다.');
        }
      } else {
        const { r, g, b, alpha } = args[0];

        this.r = r;
        this.g = g;
        this.b = b;
        this.alpha = alpha;
      }
    }
  }

  toArray() {
    const { r, g, b, alpha } = this;

    return [r, g, b, alpha];
  }

  toString() {
    const { r, g, b, alpha } = this;

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  clone() {
    return new RGBA(this.toString());
  }
}
