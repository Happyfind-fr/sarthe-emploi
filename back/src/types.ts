export interface userProps {
    id?: number;
    lastName?: string;
    firstName?: string;
    email?: string;
    password?: string;
    avatar?: string;
}

export interface SocketInstanceProps {
    users: any;
    messages: any;
    rooms: any;
    sessions: any;
}