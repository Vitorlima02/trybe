class Student {
  private _nome: string;
  private _matricula: string;
  private _notasProva: number[];
  private _notasTrabalho: number[];

  constructor(matricula: string, nome: string) {
    this._matricula = matricula;
    this._nome = nome;
    this._notasProva = [];
    this._notasTrabalho = [];
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get matricula(): string {
    return this._matricula;
  }

  set matricula(value: string) {
    this._matricula = value;
  }

  get notasProva(): number[] {
    return this._notasProva;
  }

  set notasProva(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoas estudante so pode ter 4 notas');
    }
    this._notasProva = value;
  }

  get notasTrabalho(): number[] {
    return this._notasTrabalho;
  }

  set notasTrabalho(value: number[]) {
    if (value.length > 2){
      throw new Error('Não pode ter mais de 2 notas de trabalho');
    }

    this._notasTrabalho = value;
  }

  sumNotas(): number {
    return [...this._notasProva, ...this._notasTrabalho].reduce((notaAnterior, nota) => {
      nota += notaAnterior;
      return nota;
    }, 0);
  }

  mediaNotas(): number {
    const sumNotes = this.sumNotas();
    const divisor = this._notasProva.length + this.notasTrabalho.length;

    const media = Math.round(sumNotes / divisor);

    return media;
  }
}