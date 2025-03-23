export const ColumnUser = [
    {
        name: "Nama",
        selector: (row: any) => row.name,
        sortable: true
    },
    {
        name: "Email",
        selector: (row: any) => row.email,
        sortable: true
    },
    {
        name: "No Telepon",
        selector: (row: any) => row.phone,
        sortable: true,
    },
    {
        name: "Peran",
        selector: (row: any) => row.role,
        sortable: true,
        width: "130px"
    },
    {
        name: "Status",
        selector: (row: any) => row.status.replace("_", " "),
        sortable: true,
        width: "130px"
    },
    {
        name: "Aksi",
        selector: (row: any) => row.action,
        sortable: true,
        width: "250px"
    },
]