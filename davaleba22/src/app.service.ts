import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getWishesByLanguage(lang: string): string {
    const wishes = {
      ka: [
        { id: 1, description: 'ახალი მანქანის შეძენა' },
        { id: 2, description: 'სახლში ახალი ავეჯის ყიდვა' },
      ],
      en: [
        { id: 1, description: 'Buying a new car' },
        { id: 2, description: 'Purchasing new furniture for the house' },
      ],
      ru: [
        { id: 1, description: 'Покупка нового автомобиля' },
        { id: 2, description: 'Покупка новой мебели для дома' },
      ],
      de: [
        { id: 1, description: 'Kauf eines neuen Autos' },
        { id: 2, description: 'Kauf neuer Möbel für das Haus' },
      ],
      fr: [
        { id: 1, description: "Achat d'une nouvelle voiture" },
        { id: 2, description: 'Achat de nouveaux meubles pour la maison' },
      ],
      it: [
        { id: 1, description: 'Acquisto di una nuova auto' },
        { id: 2, description: 'Acquisto di nuovi mobili per la casa' },
      ],
    };
    return wishes[lang];
  }
}
