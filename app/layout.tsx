export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return(
        <div>
            <p>This is where my nav would go.</p>
            <main>{children}</main>
            <p>This is where my footer would go.</p>
        </div>
    )
}