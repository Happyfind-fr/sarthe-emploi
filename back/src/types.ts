export interface userProps {
    id?: number;
    lastName?: string;
    firstName?: string;
    email?: string;
    password?: string;
    avatar?: string;
}

export interface tokenProps {
    id?: number;
    name?: string;
    value?: string;
    scope?: string;
}

export interface offerProps {
    id?: number;
    title?: string;
    description?: string;
    companyName?: string;
    companyLocation?: string;
    contractType?: string;
    contractStartDate?: number;
    contractEndDate?: number;
    weeklyHoursRate?: number;
    annualRawSalary?: number;
    toBeFilled?: number;
    wage?: number;
}

export interface SocketInstanceProps {
    users: any;
    messages: any;
    rooms: any;
    sessions: any;
}

export interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
}

export interface ClientToServerEvents {
    hello: () => void;
}

export interface InterServerEvents {
    ping: () => void;
}

export interface SocketData {
    name: string;
    age: number;
}