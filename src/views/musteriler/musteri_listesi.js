import React, { useState } from "react";

const initialCustomers = [
  {
    vkn: "1234567451",
    firma: "Klv Teknoloji A.Ş.",
    email: "tlgkrks654@gmail.com",
    telefon: "+905551112233",
    lokasyon: "İstanbul, Türkiye",
    sektor: "Bilişim",
    yetkili: "Ahmet Yılmaz - Genel Müdür",
  },
  {
    vkn: "1234567490",
    firma: "Müşteri Teknol",
    email: "pnrylmz0326@gmail.com",
    telefon: "+905321112233",
    lokasyon: "İstanbul, Türkiye",
    sektor: "Bilişim",
    yetkili: "Can Demir - Satış Direktörü",
  },
  {
    vkn: "1234567890",
    firma: "Müşteri Teknoloji A.Ş.",
    email: "mahmutkanbak@gmail.com",
    telefon: "+9053e1112233",
    lokasyon: "İstanbul, Türkiye",
    sektor: "Bilişim",
    yetkili: "Can Demir - Satış Direktörü",
  },
];

const styles = {
  container: { display: "flex", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: "#121212", minHeight: "100vh", color: "#e0e0e0" },
  main: { flex: 1, padding: "20px" },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    fontSize: "14px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.7)",
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "#1e1e2f",
  },
  thead: {
    backgroundColor: "#6b46c1",  // Mor ton
    color: "white",
    textAlign: "center",
  },
  thtd: {
    borderBottom: "1px solid #3c3c54",
    padding: "12px 10px",
    textAlign: "center",
  },
  buttonBase: {
    marginRight: "8px",
    border: "none",
    cursor: "pointer",
    color: "white",
    transition: "none",
  },
  iconButton: {
    marginRight: "8px",
    padding: "8px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "18px",
    color: "white",
    width: "36px",
    height: "36px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "none",
  },
  viewButton: {
    backgroundColor: "#5a67d8", // Mavi ton
  },
  editButton: {
    backgroundColor: "#805ad5", // Mor ton
  },
  modal: {
    position: "fixed",
    top: "50%", left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#1e1e2f",
    padding: "24px 30px",
    border: "1px solid #444",
    zIndex: 1000,
    boxShadow: "0 8px 24px rgba(0,0,0,0.7)",
    borderRadius: "12px",
    width: "320px",
    maxWidth: "90vw",
    color: "#e0e0e0",
  },
  overlay: {
    position: "fixed",
    top: 0, left: 0,
    width: "100%", height: "100%",
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 999,
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #555",
    fontSize: "14px",
    boxSizing: "border-box",
    backgroundColor: "#2a2a40",
    color: "#e0e0e0",
  },
  modalButtonBase: {
    padding: "10px 16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
    color: "white",
    transition: "none",
  },
  saveButton: {
    backgroundColor: "#5a67d8", // Mavi ton
  },
  cancelButton: {
    backgroundColor: "#9f7aea", // Açık mor ton
    marginLeft: "10px",
  },
};

function Button({ children, style, onClick, ariaLabel }) {
  return (
    <button
      style={style}
      onClick={onClick}
      type="button"
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default function App() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [editing, setEditing] = useState(null);
  const [editForm, setEditForm] = useState({});

  const filtered = customers.filter((c) =>
    c.firma.toLowerCase().includes(search.toLowerCase())
  );

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };

  const handleEditSave = () => {
    const updated = [...customers];
    updated[editing] = editForm;
    setCustomers(updated);
    setEditing(null);
  };

  return (
    <div style={styles.container}>
      <main style={styles.main}>
        <input
          placeholder="Firma Ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ ...styles.input, maxWidth: "300px" }}
        />
        <table style={styles.table}>
          <thead style={styles.thead}>
            <tr>
              <th style={styles.thtd}>VKN</th>
              <th style={styles.thtd}>Firma</th>
              <th style={styles.thtd}>E-posta</th>
              <th style={styles.thtd}>Telefon</th>
              <th style={styles.thtd}>Lokasyon</th>
              <th style={styles.thtd}>Sektör</th>
              <th style={styles.thtd}>Yetkili</th>
              <th style={styles.thtd}>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((cust, i) => (
              <tr
                key={i}
                style={{ cursor: "default" }}
              >
                <td style={styles.thtd}>{cust.vkn}</td>
                <td style={styles.thtd}>{cust.firma}</td>
                <td style={styles.thtd}>{cust.email}</td>
                <td style={styles.thtd}>{cust.telefon}</td>
                <td style={styles.thtd}>{cust.lokasyon}</td>
                <td style={styles.thtd}>{cust.sektor}</td>
                <td style={styles.thtd}>{cust.yetkili}</td>
                <td style={styles.thtd}>
                  <Button
                    style={{ ...styles.iconButton, ...styles.viewButton }}
                    onClick={() => setSelected(cust)}
                    ariaLabel="Görüntüle"
                  >
                    👁️
                  </Button>
                  <Button
                    style={{ ...styles.iconButton, ...styles.editButton }}
                    onClick={() => {
                      setEditing(i);
                      setEditForm({ ...cust });
                    }}
                    ariaLabel="Düzenle"
                  >
                    ✏️
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {/* Görüntüleme Modalı */}
      {selected && (
        <>
          <div style={styles.overlay} onClick={() => setSelected(null)} />
          <div style={styles.modal}>
            <h3>Müşteri Detayı</h3>
            <p><strong>Firma:</strong> {selected.firma}</p>
            <p><strong>E-posta:</strong> {selected.email}</p>
            <p><strong>Telefon:</strong> {selected.telefon}</p>
            <p><strong>Yetkili:</strong> {selected.yetkili}</p>
            <Button
              style={{ ...styles.modalButtonBase, ...styles.cancelButton }}
              onClick={() => setSelected(null)}
              ariaLabel="Kapat"
            >
              Kapat
            </Button>
          </div>
        </>
      )}

      {/* Edit Modalı */}
      {editing !== null && (
        <>
          <div style={styles.overlay} onClick={() => setEditing(null)} />
          <div style={styles.modal}>
            <h3>Düzenle</h3>
            <input
              name="firma"
              value={editForm.firma}
              onChange={handleEditChange}
              placeholder="Firma"
              style={styles.input}
            />
            <input
              name="email"
              value={editForm.email}
              onChange={handleEditChange}
              placeholder="Email"
              style={styles.input}
            />
            <input
              name="telefon"
              value={editForm.telefon}
              onChange={handleEditChange}
              placeholder="Telefon"
              style={styles.input}
            />
            <input
              name="yetkili"
              value={editForm.yetkili}
              onChange={handleEditChange}
              placeholder="Yetkili"
              style={styles.input}
            />
            <div style={{ marginTop: "20px" }}>
              <Button
                style={{ ...styles.modalButtonBase, ...styles.saveButton }}
                onClick={handleEditSave}
                ariaLabel="Kaydet"
              >
                Kaydet
              </Button>
              <Button
                style={{ ...styles.modalButtonBase, ...styles.cancelButton }}
                onClick={() => setEditing(null)}
                ariaLabel="İptal"
              >
                İptal
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
