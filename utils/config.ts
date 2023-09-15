export type UnionOfArrayElements<ARR_T extends Readonly<unknown[]>> = ARR_T[number];


export const parties = ["ap", "frp", "høyre", "krf", "mdg", "rødt", "sp", "sv", "venstre"] as const
export const possibleIcons = parties.map(p => `${p}.png`)
type Parties = UnionOfArrayElements<typeof parties>

export interface Question {
    id: string
    order: number
    text: string

    ranks: {
        [party in Parties]: number
    }
}

export interface Config {
    questions: Question[]
}   

const config: Config = {
    questions: [
        {
            id: "name",
            order: 1,

            text: "Mener du at vi skal ha mindre skatt i Norge?",
            ranks: {
                "ap": 0,
                "frp": 0,
                "høyre": 0,
                "krf": 0,
                "mdg": 0,
                "rødt": 0,
                "sp": 0,
                "sv": 0,
                "venstre": 0
            }
        } 
    ]
}

export default config