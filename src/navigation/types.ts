export type RootStackParamList = {
  Início: undefined;
  Detalhes: {
    itemData: {
      id: number;
      name: string;
      examine: string;
      members: boolean;
      value: number;
      highalch: number;
      lowalch: number;
      limit: number;
      icon?: string;
      price: {
        high: number;
        highTime: number;
        low: number;
        lowTime: number;
      };
    };
  };
};
