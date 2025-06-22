import React, { useState } from 'react';

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 24px',
    backgroundColor: 'transparent',
    borderRadius: '12px',
    color: 'transparent',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  title: {
    fontSize: '2rem',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '24px',
    color: '#9f7aea', // Açık mor ton
  },
  subtitle: {
    textAlign: 'center',
    color: '#a3a3c2', // mor-gri ton
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '16px',
    color: '#c4b5fd', // pastel mor
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  },
  input: {
    padding: '10px 14px',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #4c4c6d',
    backgroundColor: '#2a2a40',
    color: '#e0e0e0',
    boxSizing: 'border-box',
  },
  inputFullWidth: {
    gridColumn: 'span 2',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '16px',
  },
  btnCancel: {
    padding: '10px 18px',
    backgroundColor: '#6b46c1', // koyu mor
    color: 'white',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px',
    transition: 'background-color 0.3s ease',
  },
  btnSubmit: {
    padding: '10px 18px',
    backgroundColor: '#5a67d8', // mavi ton
    color: 'white',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px',
    transition: 'background-color 0.3s ease',
  },
};

export default function MusteriEkle() {
  const [form, setForm] = useState({
    kullaniciAdi: '',
    vergiNo: '',
    ticariUnvan: '',
    vergiDairesi: '',
    sektor: '',
    telefon: '',
    eposta: '',
    ulke: 'Türkiye',
    sehir: '',
    ilce: '',
    adres: '',
    yetkiliAdi: '',
    yetkiliSoyadi: '',
    yetkiliUnvani: '',
    yetkiliEposta: '',
    yetkiliTelefon: '',
    aciklama: '',
    ihtiyacNedeni: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Müşteri Kaydı:', form);
  };

  const handleCancel = () => {
    setForm({
      kullaniciAdi: '',
      vergiNo: '',
      ticariUnvan: '',
      vergiDairesi: '',
      sektor: '',
      telefon: '',
      eposta: '',
      ulke: 'Türkiye',
      sehir: '',
      ilce: '',
      adres: '',
      yetkiliAdi: '',
      yetkiliSoyadi: '',
      yetkiliUnvani: '',
      yetkiliEposta: '',
      yetkiliTelefon: '',
      aciklama: '',
      ihtiyacNedeni: '',
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Müşteri Oluştur</h2>
      <p style={styles.subtitle}>
        Lütfen müşteri bilgilerini eksiksiz ve doğru bir şekilde girin.
      </p>

      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Firma Bilgileri */}
        <div>
          <h3 style={styles.sectionTitle}>Firma Bilgileri</h3>
          <div style={styles.grid}>
            <input
              name="kullaniciAdi"
              placeholder="Kullanıcı Adı *"
              value={form.kullaniciAdi}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              name="vergiNo"
              placeholder="Vergi Numarası (VKN/TCKN) *"
              value={form.vergiNo}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              name="ticariUnvan"
              placeholder="Ticari Ünvan *"
              value={form.ticariUnvan}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              name="vergiDairesi"
              placeholder="Vergi Dairesi"
              value={form.vergiDairesi}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              name="sektor"
              placeholder="Sektör"
              value={form.sektor}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              name="telefon"
              placeholder="Telefon Numarası *"
              value={form.telefon}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
        </div>

        {/* İletişim Bilgileri */}
        <div>
          <h3 style={styles.sectionTitle}>İletişim ve Adres Bilgileri</h3>
          <div style={styles.grid}>
            <input
              name="eposta"
              placeholder="E-posta *"
              value={form.eposta}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              name="ulke"
              placeholder="Ülke"
              value={form.ulke}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              name="sehir"
              placeholder="Şehir"
              value={form.sehir}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              name="ilce"
              placeholder="İlçe"
              value={form.ilce}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              name="adres"
              placeholder="Adres"
              value={form.adres}
              onChange={handleChange}
              style={{ ...styles.input, ...styles.inputFullWidth }}
            />
          </div>
        </div>

        {/* Yetkili Bilgileri */}
        <div>
          <h3 style={styles.sectionTitle}>Yetkili Kişi Bilgileri</h3>
          <div style={styles.grid}>
            <input
              name="yetkiliAdi"
              placeholder="Yetkili Adı"
              value={form.yetkiliAdi}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              name="yetkiliSoyadi"
              placeholder="Yetkili Soyadı"
              value={form.yetkiliSoyadi}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              name="yetkiliUnvani"
              placeholder="Yetkili Ünvanı"
              value={form.yetkiliUnvani}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              name="yetkiliEposta"
              placeholder="Yetkili E-posta"
              value={form.yetkiliEposta}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              name="yetkiliTelefon"
              placeholder="Yetkili Telefon"
              value={form.yetkiliTelefon}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
        </div>

        {/* Ek Bilgiler */}
        <div>
          <h3 style={styles.sectionTitle}>Ek Bilgiler</h3>
          <div style={styles.grid}>
            <input
              name="aciklama"
              placeholder="Açıklama"
              value={form.aciklama}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              name="ihtiyacNedeni"
              placeholder="İhtiyaç Nedeni"
              value={form.ihtiyacNedeni}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
        </div>

        {/* Butonlar */}
        <div style={styles.buttons}>
          <button
            type="button"
            onClick={handleCancel}
            style={styles.btnCancel}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = '#805ad5')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = '#6b46c1')
            }
          >
            İptal
          </button>
          <button
            type="submit"
            style={styles.btnSubmit}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = '#434190')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = '#5a67d8')
            }
          >
            Müşteriyi Kaydet
          </button>
        </div>
      </form>
    </div>
  );
}
