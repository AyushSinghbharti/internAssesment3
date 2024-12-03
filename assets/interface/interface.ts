export default interface Data {
  chats: Chat[];
  from: string;
  message: string;
  name: string;
  status: string;
  to: string;
}

export interface Chat {
  id: string;
  message: string;
  sender: Sender;
  time: string;
}

export interface Sender {
  image: string;
  is_kyc_verified: boolean;
  self: boolean;
  user_id: string;
}