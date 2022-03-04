class Client {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

class OrderItem {
  private _productName: string = String();
  private _price: number = Number();

  constructor(product: string, price: number) {
    this._productName = product;
    this._price = price;
  }

  get product(): string {
    return this._productName;
  }

  set product(value: string) {
    this._productName = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }
}

class Order {
  private _client: Client;
  private _itens: OrderItem[] = [];
  private _paymentMethod: string;
  private _discount: number = 0;

  constructor(cliente: Client, items: OrderItem[], paymentMethod: string, discount: number) {
    this._client = cliente;
    this._itens = items;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  get client(): Client {
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }

  get items(): OrderItem[] {
    return this._itens;
  }

  set items(value: OrderItem[]) {
      if (value.length === 0) {
          throw new Error('O pedido deve ter pelo meno um item.');
      }

      this._itens = value;
  }

  get paymentMethod(): string {
      return this._paymentMethod;
  }

  set paymentMethod(value: string) {
      this._paymentMethod = value;
  }

  get discount(): number {
      return this._discount;
  }

  set discount(value: number) {
      if (value < 0) {
          throw new Error('O disconto não pode ser um valor negatívo.');
      }

      this._discount = value;
  }

  calculateTotal(): number {
    return this.items.reduce((previousValue, item) => {
      const total = previousValue += item.price;
      return total;
    }, 0)
  }

  calculateDiscount(): number {
    return this.calculateTotal() * (1 - this.discount);
  }
}