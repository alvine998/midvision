export const ColumnUserLog = [
    {
        name: "Nama",
        selector: (row: any) => row.user_name,
        sortable: true
    },
    {
        name: "Email",
        selector: (row: any) => row.user_email,
        sortable: true
    },
    {
        name: "Login Terakhir",
        selector: (row: any) => row.login_on,
        sortable: true
    }
]