export type TUser = {
    id: string,
    password: string,
    needsPasswordChange: boolean,
    role: 'admin' | 'student' | 'faculty',
    status: string,
    isDeleted: boolean,
}

export type TNewUser = {
    role: string,
    password: string,
    id: string,
}