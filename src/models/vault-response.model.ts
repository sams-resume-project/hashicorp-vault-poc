// swagger
import { ApiProperty } from '@nestjs/swagger';

interface VaultResponseInterface {
    userName: string;
    password: string
}

export class VaultResponse implements VaultResponseInterface {
    @ApiProperty({ description: 'User name', required: true })
    public userName: string;

    @ApiProperty({ description: 'Password', required: true })
    public password: string;

    constructor({
        userName,
        password,
    }: VaultResponseInterface) {
        this.userName = userName;
        this.password = password;
    }
}