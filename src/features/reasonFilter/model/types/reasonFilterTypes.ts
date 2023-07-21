export enum Reasons {
  Halloween = 'Хэлуин',
  Birthday = 'День рождения',
  Extract = 'Выписка',
  GenderParty = 'Гендер пати',
  Photosession = 'Фотосессия',
  Anniversary = 'Годовщина',
  Wedding = 'Свадьба',
  NewYear = 'Новый год',
  LoveDay = '14 февраля',
  MansDay = '23 февраля',
  WoomansDay = '8 марта',
  Graduation = 'Выпускной',
  SchoolDay = 'Первое сентября',
}

export type ReasonsKeys = keyof typeof Reasons

export type ReasonsFilter = {
  [k in ReasonsKeys]: boolean
}
