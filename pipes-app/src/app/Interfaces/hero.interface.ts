export enum Color {
  red,
  black,
  blue,
  green,
  yellow,
  orange,
  purple,
}

export enum Creator {
  DC,
  Marvel,
}

export interface Hero {
  id: number;
  name: string;
  canFly: boolean;
  color: Color;
  creator: Creator;
}

export const ColorMap = {
  [Color.red]: '#E57373',
  [Color.black]: '#424242',
  [Color.blue]: '#044aba',
  [Color.green]: '#81C784',
  [Color.yellow]: '#FFEB3B',
  [Color.orange]: '#FF9800',
  [Color.purple]: '#BA68C8',
};