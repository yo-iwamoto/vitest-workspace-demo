type Props = {
  userName: string;
};

export function UserProfile({ userName }: Props) {
  return (
    <div>
      <p>{userName}</p>
    </div>
  );
}
