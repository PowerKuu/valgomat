export type UnionOfArrayElements<ARR_T extends Readonly<unknown[]>> = ARR_T[number];


export const parties = ["ap", "frp", "høyre", "krf", "mdg", "rødt", "sp", "sv", "venstre"] as const

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
            id: "klimaendringer",
            order: 1,
            text: "Mener du at det er nødvendig med øyeblikkelig handling for å bekjempe klimaendringer?",
            ranks: {
                "ap": 0.8,
                "frp": 0.2,
                "høyre": 0.6,
                "krf": 0.5,
                "mdg": 0.9,
                "rødt": 0.9,
                "sp": 0.7,
                "sv": 0.9,
                "venstre": 0.9
            }
        },
        {
            id: "helsevesen",
            order: 2,
            text: "Bør helsetjenester tilbys som en universell rettighet til alle borgere?",
            ranks: {
                "ap": 0.9,
                "frp": 0.2,
                "høyre": 0.4,
                "krf": 0.6,
                "mdg": 0.8,
                "rødt": 0.9,
                "sp": 0.8,
                "sv": 0.9,
                "venstre": 0.9
            }
        },
        {
            id: "utdanningsfinansiering",
            order: 3,
            text: "Støtter du økt finansiering av utdanning i nasjonalbudsjettet?",
            ranks: {
                "ap": 0.9,
                "frp": 0.3,
                "høyre": 0.6,
                "krf": 0.7,
                "mdg": 0.8,
                "rødt": 0.9,
                "sp": 0.9,
                "sv": 0.9,
                "venstre": 0.9
            }
        },
        {
            id: "innvandringspolitikk",
            order: 4,
            text: "Bør det innføres strengere innvandringspolitikk for å kontrollere grensesikkerhet?",
            ranks: {
                "ap": 0.4,
                "frp": 0.9,
                "høyre": 0.7,
                "krf": 0.5,
                "mdg": 0.2,
                "rødt": 0.3,
                "sp": 0.3,
                "sv": 0.1,
                "venstre": 0.2
            }
        },
        {
            id: "minstelønn",
            order: 5,
            text: "Støtter du økt minstelønn for arbeidstakere?",
            ranks: {
                "ap": 0.8,
                "frp": 0.3,
                "høyre": 0.5,
                "krf": 0.6,
                "mdg": 0.9,
                "rødt": 0.9,
                "sp": 0.9,
                "sv": 0.9,
                "venstre": 0.9
            }
        }
    ]
}

export default config