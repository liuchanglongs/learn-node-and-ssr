type Iprops = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Iprops) {
  return (
    <html>
      <head />
      <body className="liujun">{children}</body>
    </html>
  );
}
