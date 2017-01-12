/*!
 Based on ndef.parser, by Raphael Graf(r@undefined.ch)
 http://www.undefined.ch/mparser/index.html

 Ported to JavaScript and modified by Matthew Crumley (email@matthewcrumley.com, http://silentmatt.com/)

 You are free to use and modify this code in anyway you find useful. Please leave this comment in the code
 to acknowledge its original source. If you feel like it, I enjoy hearing about projects that use my code,
 but don't feel like you have to let me know or ask permission.
 */
/**
 * custom class to implement the parser util in ES6 with SystemJs
 *
 */
export declare class Parser {
  ops1: {
    sin: ( x: number ) => number;
    cos: ( x: number ) => number;
    tan: ( x: number ) => number;
    asin: ( x: number ) => number;
    acos: ( x: number ) => number;
    atan: ( x: number ) => number;
    sinh: ( a: any ) => number;
    cosh: ( a: any ) => number;
    tanh: ( a: any ) => number;
    asinh: ( a: any ) => any;
    acosh: ( a: any ) => number;
    atanh: ( a: any ) => number;
    sqrt: ( x: number ) => number;
    log: ( x: number ) => number;
    lg: ( a: any ) => number;
    log10: ( a: any ) => number;
    abs: ( x: number ) => number;
    ceil: ( x: number ) => number;
    floor: ( x: number ) => number;
    round: ( x: number ) => number;
    trunc: ( a: any ) => number;
    '-': ( a: any ) => number;
    '+': NumberConstructor;
    exp: ( x: number ) => number;
    not: ( a: any ) => boolean;
  };
  ops2: {
    '+': ( a: any, b: any ) => number;
    '-': ( a: any, b: any ) => number;
    '*': ( a: any, b: any ) => number;
    '/': ( a: any, b: any ) => number;
    '%': ( a: any, b: any ) => number;
    '^': ( x: number, y: number ) => number;
    ',': ( a: any, b: any ) => any;
    '||': ( a: any, b: any ) => string;
    '==': ( a: any, b: any ) => boolean;
    '!=': ( a: any, b: any ) => boolean;
    '>': ( a: any, b: any ) => boolean;
    '<': ( a: any, b: any ) => boolean;
    '>=': ( a: any, b: any ) => boolean;
    '<=': ( a: any, b: any ) => boolean;
    and: ( a: any, b: any ) => boolean;
    or: ( a: any, b: any ) => boolean;
  };
  ops3: {
    '?': ( cond: any, yep: any, nope: any ) => any;
  };
  functions: {
    random: ( a: any ) => number;
    fac: ( a: any ) => number;
    min: ( ...values: number[] ) => number;
    max: ( ...values: number[] ) => number;
    hypot: () => any;
    pyt: () => any;
    pow: ( x: number, y: number ) => number;
    atan2: ( y: number, x: number ) => number;
    'if': ( cond: any, yep: any, nope: any ) => any;
  };
  consts: {
    E: number;
    PI: number;
    'true': boolean;
    'false': boolean;
  };

  parse( expr: any ): any;

  evaluate( expr: any, variables: any ): any;
}
