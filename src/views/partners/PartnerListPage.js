import React, { useState, useEffect } from 'react';
import { Building, Eye, EyeOff, Edit3, ToggleLeft, ToggleRight, Plus, Search } from 'lucide-react';

const mockPartners = [
  {
    id: "1",
    title: "TechSoft Yazılım A.Ş.",
    email: "info@techsoft.com",
    phoneNumber: "+90 212 123 45 67",
    city: "İstanbul",
    type: "Teknoloji",
    authorizedPersonFirstName: "Mehmet",
    authorizedPersonLastName: "Kaya",
    isActive: true,
  }
];

// Tasarım standartları için stil objesi (App ile uyumlu)
const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "transparent",
    minHeight: "100vh",
    color: "#e0e0e0",
    padding: "20px",
  },
  wrapper: {
    maxWidth: "1000px",
    margin: "0 auto",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
    color: "#8b80f9", // Mor ton
    fontWeight: "700",
    fontSize: "1.8rem",
  },
  searchContainer: {
    position: "relative",
    maxWidth: "300px",
    marginBottom: "20px",
  },
  searchIcon: {
    position: "absolute",
    left: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#888",
    pointerEvents: "none",
  },
  searchInput: {
    width: "100%",
    padding: "10px 12px 10px 36px",
    borderRadius: "6px",
    border: "1px solid #555",
    backgroundColor: "#2a2a40",
    color: "#e0e0e0",
    fontSize: "14px",
  },
  filterBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  toggleBtn: (active) => ({
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "8px 14px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
    backgroundColor: active ? "#3b3a67" : "#1e1e2f",
    color: active ? "#a5a4db" : "#c0c0ff",
    transition: "background-color 0.2s",
  }),
  addBtn: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "8px 14px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
    backgroundColor: "#5a67d8",
    color: "white",
    transition: "background-color 0.2s",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    boxShadow: "0 2px 8px rgba(0,0,0,0.7)",
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "#1e1e2f",
    fontSize: "14px",
  },
  thead: {
    backgroundColor: "#6b46c1",
    color: "white",
    textAlign: "center",
  },
  thtd: {
    padding: "12px 10px",
    borderBottom: "1px solid #3c3c54",
    textAlign: "center",
    userSelect: "none",
  },
  statusBadge: (active) => ({
    display: "inline-block",
    padding: "4px 10px",
    borderRadius: "9999px",
    fontSize: "12px",
    fontWeight: "600",
    color: active ? "#276749" : "#742a2a",
    backgroundColor: active ? "#c6f6d5" : "#feb2b2",
  }),
  actionBtn: {
    padding: "6px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    color: "#e0e0e0",
    backgroundColor: "transparent",
    transition: "color 0.2s, background-color 0.2s",
  },
  actionBtnHoverBlue: {
    color: "#5a67d8",
    backgroundColor: "#2d3748",
  },
  actionBtnHoverRed: {
    color: "#f56565",
    backgroundColor: "#2d1e1e",
  },
  noData: {
    padding: "40px 0",
    textAlign: "center",
    color: "#999",
  },
  modalOverlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 1000,
  },
  modal: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#1e1e2f",
    padding: "30px 36px",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.7)",
    color: "#e0e0e0",
    zIndex: 1001,
    minWidth: "320px",
    maxWidth: "90vw",
  },
  modalTitle: {
    marginBottom: "20px",
    fontWeight: "700",
    fontSize: "1.3rem",
  },
  modalText: {
    marginBottom: "10px",
    fontSize: "14px",
  },
  modalCloseBtn: {
    marginTop: "20px",
    padding: "10px 16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
    backgroundColor: "#9f7aea",
    color: "white",
  },
};

function Button({ children, style, onClick, ariaLabel }) {
  return (
    <button style={style} onClick={onClick} aria-label={ariaLabel} type="button">
      {children}
    </button>
  );
}

const PartnerListPage = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showInactive, setShowInactive] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);

  useEffect(() => {
    const fetchPartners = async () => {
      setLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        setPartners(mockPartners);
      } catch (error) {
        console.error('Partnerler yüklenemedi:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPartners();
  }, []);

  const filteredPartners = partners.filter(partner => {
    const matchesSearch = !searchTerm ||
      partner.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.email?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = showInactive || partner.isActive;
    return matchesSearch && matchesStatus;
  });

  const handleToggleStatus = (partnerId) => {
    setPartners(prev =>
      prev.map(partner =>
        partner.id === partnerId ? { ...partner, isActive: !partner.isActive } : partner
      )
    );
  };

  if (loading) {
    return (
      <div style={{ ...styles.container, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>

        <header style={styles.header}>
          <Building size={28} />
          Partner Yönetimi
        </header>

        {/* Arama ve Filtreler */}
        <div style={styles.filterBar}>

          <div style={styles.searchContainer}>
            <Search size={18} style={styles.searchIcon} />
            <input
              type="text"
              placeholder="Partner ara..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={styles.searchInput}
            />
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => setShowInactive(!showInactive)}
              style={styles.toggleBtn(showInactive)}
              aria-label="Pasif partnerleri göster"
              type="button"
            >
              {showInactive ? <EyeOff size={16} /> : <Eye size={16} />}
              {showInactive ? "Pasif Dahil" : "Sadece Aktif"}
            </button>

            <button
              style={styles.addBtn}
              type="button"
              aria-label="Yeni partner ekle"
            >
              <Plus size={16} />
              Yeni Partner
            </button>
          </div>

        </div>

        {/* Tablo */}
        {filteredPartners.length === 0 ? (
          <div style={styles.noData}>
            <Building size={48} color="#555" />
            <h3 style={{ marginTop: '10px', fontWeight: '600' }}>Partner bulunamadı</h3>
            <p>Henüz partner eklenmemiş.</p>
          </div>
        ) : (
          <table style={styles.table}>
            <thead style={styles.thead}>
              <tr>
                <th style={styles.thtd}>Partner</th>
                <th style={styles.thtd}>Yetkili</th>
                <th style={styles.thtd}>İletişim</th>
                <th style={styles.thtd}>Tür/Konum</th>
                <th style={styles.thtd}>Durum</th>
                <th style={styles.thtd}>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {filteredPartners.map(partner => (
                <tr key={partner.id} style={{ userSelect: "none" }}>
                  <td style={styles.thtd}>
                    <div style={{ fontWeight: "600", color: "#e0e0e0" }}>{partner.title}</div>
                    <div style={{ fontSize: "12px", color: "#bbb" }}>{partner.type}</div>
                  </td>
                  <td style={styles.thtd}>
                    {partner.authorizedPersonFirstName} {partner.authorizedPersonLastName}
                  </td>
                  <td style={styles.thtd}>
                    <div style={{ fontSize: "13px" }}>{partner.email}</div>
                    <div style={{ fontSize: "12px", color: "#bbb" }}>{partner.phoneNumber}</div>
                  </td>
                  <td style={styles.thtd}>
                    <div style={{ fontSize: "13px" }}>{partner.type}</div>
                    <div style={{ fontSize: "12px", color: "#bbb" }}>{partner.city}</div>
                  </td>
                  <td style={styles.thtd}>
                    <span style={styles.statusBadge(partner.isActive)}>
                      {partner.isActive ? "Aktif" : "Pasif"}
                    </span>
                  </td>
                  <td style={styles.thtd}>
                    <button
                      type="button"
                      style={{
                        ...styles.actionBtn,
                        ...{ marginRight: "8px" },
                      }}
                      aria-label="Düzenle"
                      onClick={() => alert(`Düzenle: ${partner.title}`)}
                      onMouseEnter={e => e.currentTarget.style.color = "#5a67d8"}
                      onMouseLeave={e => e.currentTarget.style.color = "#e0e0e0"}
                    >
                      <Edit3 size={16} />
                    </button>

                    <button
                      type="button"
                      style={styles.actionBtn}
                      onClick={() => handleToggleStatus(partner.id)}
                      aria-label={partner.isActive ? "Pasif yap" : "Aktif yap"}
                      onMouseEnter={e => e.currentTarget.style.color = partner.isActive ? "#f56565" : "#48bb78"}
                      onMouseLeave={e => e.currentTarget.style.color = "#e0e0e0"}
                    >
                      {partner.isActive ? (
                        <ToggleRight size={16} />
                      ) : (
                        <ToggleLeft size={16} />
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Partner Detay Modal */}
        {selectedPartner && (
          <>
            <div
              style={styles.modalOverlay}
              onClick={() => setSelectedPartner(null)}
            />
            <div style={styles.modal}>
              <h3 style={styles.modalTitle}>Partner Detayı</h3>
              <p style={styles.modalText}><strong>Firma:</strong> {selectedPartner.title}</p>
              <p style={styles.modalText}><strong>E-posta:</strong> {selectedPartner.email}</p>
              <p style={styles.modalText}><strong>Telefon:</strong> {selectedPartner.phoneNumber}</p>
              <p style={styles.modalText}><strong>Yetkili:</strong> {selectedPartner.authorizedPersonFirstName} {selectedPartner.authorizedPersonLastName}</p>
              <button
                type="button"
                style={styles.modalCloseBtn}
                onClick={() => setSelectedPartner(null)}
                aria-label="Kapat"
              >
                Kapat
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default PartnerListPage;
