import UserAppbar from "../../components/UserAppar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return(
    <div>
      <UserAppbar ></UserAppbar>
      {children}
    </div>
  )
}
