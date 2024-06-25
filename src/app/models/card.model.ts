import { Set } from "./set.model";

export interface Card {
    id: string;
    name: string;
    supertype: string;
    subtypes: string[];
    types?: string[];
    evolesFrom?: string;
    evolvesTo?: string[];
    rules?: string[];
    attacks?: IAttack[];
    weaknesses?: IWeakness[];
    resistances?: IResistance[];
    retreatCost?: string[];
    convertedRetreatCost?: number;
    set: Set;
    number: string;
    artist?: string;
    rarity: string;
    flavorText?: string;
    nationalPokedexNumbers?: number[];
    legalities: {
        unlimited: string,
        standard: string,
        expanded: string
    };
    images: {
        small: string,
        large: string
    };
}

export interface IAttack {
    cost: string[];
    name: string;
    text: string;
    damage: string;
    convertedEnergyCost: string;
}
export interface IResistance {
    type: string;
    value: string;
}

export interface IWeakness {
    type: string;
    value: string;
}

