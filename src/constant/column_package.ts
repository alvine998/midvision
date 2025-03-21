export const ColumnPackage = [
    {
        name: "Nama Paket",
        selector: (row: any) => row.name,
        sortable: true
    },
    {
        name: "Detail",
        selector: (row: any) => row.detail,
        sortable: true
    },
    {
        name: "Aksi",
        selector: (row: any) => row.action,
        sortable: true
    },
]