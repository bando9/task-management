type typeUser = {
  user: string;
};
export function Profile({ user }: typeUser) {
  return <div>Hello {user}, this is from profile component</div>;
}
