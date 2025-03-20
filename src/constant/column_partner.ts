export const ColumnPartner = [
    {
        name: "Nama Partner",
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
        width: "130px"
    },
    {
        name: "Alamat",
        selector: (row: any) => row.address,
        sortable: true
    },
    {
        name: "Paket",
        selector: (row: any) => row.package_name,
        sortable: true,
        width: "100px"
    },
    {
        name: "Masa Aktif",
        selector: (row: any) => row.due_date,
        sortable: true,
        width: "100px"
    },
    {
        name: "Status",
        selector: (row: any) => row.status,
        sortable: true,
        width: "80px"
    },
    {
        name: "Aksi",
        selector: (row: any) => row.action,
        sortable: true
    },
]