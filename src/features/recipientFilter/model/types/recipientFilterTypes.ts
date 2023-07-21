export enum Recipients {
  LittleGirl = 'Девочке',
  Boy = 'Мальчику',
  Girl = 'Девушке',
  Guy = 'Парню',
  Mother = 'Фотосессия',
  Father = 'Годовщина',
  GrandMa = 'Бабушке',
  GrandDad = 'Дедушке',
}

export type RecipientsKeys = keyof typeof Recipients

export type RecipientFilterType = {
  [k in RecipientsKeys]: boolean
}
