import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65cbb67398468f9eeec6');

export const account = new Account(client);
export { ID } from 'appwrite';
