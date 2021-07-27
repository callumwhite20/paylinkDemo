export class MagicGetterSetter {
    private _name:string = '';
    private _age:number = 0;
    private magicGetterSetterMap: { [key: string]: any } = {
        name: this.name,
        age: this.age
    };

    protected get name(): string {
        return this._name;
    }

    protected get age(): number {
        return this._age;
    }

    protected set name(newName: string) {
        if (newName === '') {
            throw new Error('The name is invalid');
        }

        this._name = newName;
    }

    protected set age(newAge: number) {
        if (newAge < 0) {
            throw new Error('The age is invalid');
        }

        this._age = newAge;
    }

    public magicGet(param:string): unknown {
        if (typeof this.magicGetterSetterMap[param] !== 'undefined') {
            return this.magicGetterSetterMap[param];
        } else {
            throw new Error(param + ' is not a valid get method');
        }
    }

    public magicSet(param:string, value:unknown): unknown {
        if (typeof this.magicGetterSetterMap[param] !== 'undefined') {
            return this.magicGetterSetterMap[param] = value;
        } else {
            throw new Error(param + ' is not a valid get method');
        }
    }

}
