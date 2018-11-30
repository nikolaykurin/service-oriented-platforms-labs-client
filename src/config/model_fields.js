export default {
  'receipt': [
    { accessor: 'id', title: 'ID', type: 'number' },
    { accessor: 'timestamp', title: 'Timestamp', type: 'timestamp' },
    { accessor: 'document_id', title: 'Document ID', type: 'select' },
    { accessor: 'name', title: 'Name', type: 'text' },
    { accessor: 'name_from', title: 'Name From', type: 'text' },
    { accessor: 'name_to', title: 'Name To', type: 'text' }
  ],
  'invoice': [
    { accessor: 'id', title: 'ID', type: 'number' },
    { accessor: 'timestamp', title: 'Timestamp', type: 'timestamp' },
    { accessor: 'document_id', title: 'Document ID', type: 'select' },
    { accessor: 'name', title: 'Name', type: 'text' },
    { accessor: 'production', title: 'Production', type: 'text' },
    { accessor: 'count', title: 'Count', type: 'number' }
  ],
  'document': [
    { accessor: 'id', title: 'ID', type: 'number' },
    { accessor: 'timestamp', title: 'Timestamp', type: 'timestamp' },
    { accessor: 'name', title: 'Name', type: 'text' }
  ],
  'bill': [
    { accessor: 'id', title: 'ID', type: 'number' },
    { accessor: 'timestamp', title: 'Timestamp', type: 'timestamp' },
    { accessor: 'receipt_id', title: 'Receipt ID', type: 'select' },
    { accessor: 'name', title: 'Name', type: 'text' },
    { accessor: 'sum', title: 'Sum', type: 'number' }
  ]
};
