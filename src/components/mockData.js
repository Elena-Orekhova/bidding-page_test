const currentDateTime = new Date().toLocaleString('ru-RU', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit'
});

export const tradeName = `Аппарат ЛОТОС №123 от (${currentDateTime})`;

export const mockData = [
  {
    "id": 1,
    "name": "ООО 'ТехноСтрой'",
    "url": "11",
    "complexActivities": "да",
    "productionTimeDays": 30,
    "warrantyMonths": 24,
    "paymentTermsPercent": 50,
    "manufacturingCost": 1500000
  },
  {
    "id": 2,
    "name": "ЗАО 'СтройКомплект'",
    "url": 22,
    "complexActivities": "нет",
    "productionTimeDays": 45,
    "warrantyMonths": 18,
    "paymentTermsPercent": 30,
    "manufacturingCost": 1750000
  },
  {
    "id": 3,
    "name": "ИП 'МастерПром'",
    "url": 33,
    "complexActivities": "да",
    "productionTimeDays": 60,
    "warrantyMonths": 36,
    "paymentTermsPercent": 40,
    "manufacturingCost": 1600000
  },
  {
    "id": 4,
    "name": "ООО 'СтройТехСервис'",
    "url": 44,
    "complexActivities": "нет",
    "productionTimeDays": 35,
    "warrantyMonths": 12,
    "paymentTermsPercent": 60,
    "manufacturingCost": 1400000
  },
  {
    "id": 5,
    "name": "АО 'ПроектСнаб'",
    "url": 55,
    "complexActivities": "да",
    "productionTimeDays": 50,
    "warrantyMonths": 24,
    "paymentTermsPercent": 20,
    "manufacturingCost": 1900000
  }
]
