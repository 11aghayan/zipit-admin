export type ModalVariantType = 'category' | 'item' | null;

export type ModalDataType = ItemType | CategoryType | null;

export type RequestType = 'post' | 'put';

export type AddModalContextType = {
  isOpen: boolean;
  toggleOpen: () => void; 
  variant: ModalVariantType;
  setVariant: React.Dispatch<React.SetStateAction<ModalVariantType>>;
  data: ModalDataType;
  setData: (data: ModalDataType) => void;
  request: RequestType;
  setRequest: (request: RequestType) => void;
};

export type CategoryType = {
  id: string;
  label: LanguageStringType;
  itemsQty: number
};

export type ItemCategoryType = {
  id: string;
  name: LanguageStringType;
}

export type ItemType = {
  id: string;
  category: ItemCategoryType;
  name: LanguageStringType;
  price: number;
  promo: PromoType;
  size: SizeType;
  minOrder: MinOrderType;
  photos: PhotoType[];
  description: LanguageStringType;
};

export type PhotoType = {
  src: string;
  color: LanguageStringType;
};

export type ItemResponseType = {
  items: ItemType[];
  length: number;
  pages: number;
}

export type LanguageStringType = {
  am: string;
  ru: string;
};

export type MinOrderType = {
  qty: number;
  unit: MinOrderUnitType;
};

export type MinOrderUnitType = 'pcs' | 'cm' | 'box' | 'roll';

export type SizeType = {
  values: SizeValueType[];
  unit: SizeUnitType;
};

export type SizeValueType = {
  available: boolean;
  value: number;
};

export type SizeUnitType = 'mm' | 'cm' | 'm';

export type PromoType = number | null;

export type ResponseType = {
  ok: true
} | {
  ok: false;
  message: string;
};

export type AuthType = {
  accessToken: string;
  loggedIn: boolean;
}

export type AuthContextType = {
  auth: AuthType;
  setAuth: React.Dispatch<React.SetStateAction<AuthType>>;
}

export type ChangePasswordType = {
  password: string;
  newPassword: string;
  newPasswordRepeat: string;
}

export type CustomErrorType = { 
  data: { ok: boolean, message: string }
}

export type ApiRouteType = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  label: string,
  route: string,
  isProtected: boolean
}

export type ApiRoutesType = {
  [routeName: string]: ApiRouteType[]
}