export interface IProduct {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    stock: number;
}

export interface ICartItem extends IProduct {
    quantity: number;
}

export interface IUser {
    uid: string;
    email: string | null;
    displayName: string | null;
    role: 'admin' | 'customer';
}

export interface IOrder {
    id?: string;
    userId: string;
    items: ICartItem[];
    totalAmount: number;
    status: 'pending' | 'completed' | 'cancelled';
    createdAt: any; // Firestore Timestamp
}
