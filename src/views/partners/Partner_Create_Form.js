import { cilOpacity } from '@coreui/icons';
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
  grid3: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '16px',
  },
  grid2: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  },
  input: {
    padding: '10px 14px',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solidrgb(255, 255, 255)',
    backgroundColor: '#fffff',
    color: '#e0e0e0',
    boxSizing: 'border-box',
  },
  inputFullWidth: {
    gridColumn: 'span 3',
  },
  textarea: {
    padding: '10px 14px',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solidrgb(255, 255, 255)',
    backgroundColor: '#fffff',
    color: '#e0e0e0',
    boxSizing: 'border-box',
    resize: 'none',
    minHeight: '80px',
  },
  select: {
    padding: '10px 14px',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #4c4c6d',
    backgroundColor: '#fffff',
    color: '#e0e0e0',
    boxSizing: 'border-box',
    appearance: 'none',
    cursor: 'pointer',
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
  label: {
    display: 'block',
    marginBottom: '6px',
    fontWeight: '600',
    fontSize: '0.9rem',
    color: '#c4b5fd',
  },
};

export default function PartnerCreateForm() {
  const [form, setForm] = useState({
    taxIdNumber: '',
    userName: '',
    title: '',
    taxOffice: '',
    country: 'Türkiye',
    city: '',
    district: '',
    phoneNumber: '',
    email: '',
    address: '',
    authorizedPersonFirstName: '',
    authorizedPersonLastName: '',
    authorizedPersonTitle: '',
    authorizedPersonEmail: '',
    authorizedPersonPhoneNumber: '',
    description: '',
    type: '',
    contractDocument: '',
    taxPlateDocument: '',
    signatureDocument: '',
    tradeRegistryGazetteDocument: '',
    activityCertificateDocument: '',
    identityDocument: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Partner Kaydı:', form);
    alert('Partner başarıyla oluşturuldu!');
  };

  const handleCancel = () => {
    setForm({
      taxIdNumber: '',
      userName: '',
      title: '',
      taxOffice: '',
      country: 'Türkiye',
      city: '',
      district: '',
      phoneNumber: '',
      email: '',
      address: '',
      authorizedPersonFirstName: '',
      authorizedPersonLastName: '',
      authorizedPersonTitle: '',
      authorizedPersonEmail: '',
      authorizedPersonPhoneNumber: '',
      description: '',
      type: '',
      contractDocument: '',
      taxPlateDocument: '',
      signatureDocument: '',
      tradeRegistryGazetteDocument: '',
      activityCertificateDocument: '',
      identityDocument: '',
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Yeni Partner Ekle</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Temel Bilgiler */}
        <div>
          <h3 style={styles.sectionTitle}>Temel Bilgiler</h3>
          <div style={styles.grid3}>
            <div>
              <label htmlFor="taxIdNumber" style={styles.label}>
                TC/VKN *
              </label>
              <input
                id="taxIdNumber"
                name="taxIdNumber"
                type="text"
                value={form.taxIdNumber}
                onChange={handleChange}
                
                required
                style={styles.input}
              />
            </div>

            <div>
              <label htmlFor="userName" style={styles.label}>
                Kullanıcı Adı
              </label>
              <input
                id="userName"
                name="userName"
                type="text"
                value={form.userName}
                onChange={handleChange}
                
                style={styles.input}
              />
            </div>

            <div>
              <label htmlFor="title" style={styles.label}>
                Firma Ünvanı *
              </label>
              <input
                id="title"
                name="title"
                type="text"
                value={form.title}
                onChange={handleChange}
                
                required
                style={styles.input}
              />
            </div>

            <div>
              <label htmlFor="type" style={styles.label}>
                Partner Tipi
              </label>
              <select
                id="type"
                name="type"
                value={form.type}
                onChange={handleChange}
                style={styles.select}
              >
                <option value="">Tür seçin</option>
                <option value="Teknoloji">Teknoloji</option>
                <option value="Pazarlama">Pazarlama</option>
                <option value="Danışmanlık">Danışmanlık</option>
                <option value="Eğitim">Eğitim</option>
                <option value="Diğer">Diğer</option>
              </select>
            </div>

            <div>
              <label htmlFor="phoneNumber" style={styles.label}>
                Telefon *
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                value={form.phoneNumber}
                onChange={handleChange}
                
                required
                style={styles.input}
              />
            </div>

            <div>
              <label htmlFor="email" style={styles.label}>
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                
                required
                style={styles.input}
              />
            </div>

            <div>
              <label htmlFor="taxOffice" style={styles.label}>
                Vergi Dairesi
              </label>
              <input
                id="taxOffice"
                name="taxOffice"
                type="text"
                value={form.taxOffice}
                onChange={handleChange}
                
                style={styles.input}
              />
            </div>

            <div>
              <label htmlFor="city" style={styles.label}>
                Şehir
              </label>
              <input
                id="city"
                name="city"
                type="text"
                value={form.city}
                onChange={handleChange}
                
                style={styles.input}
              />
            </div>

            <div>
              <label htmlFor="district" style={styles.label}>
                İlçe
              </label>
              <input
                id="district"
                name="district"
                type="text"
                value={form.district}
                onChange={handleChange}
                
                style={styles.input}
              />
            </div>
          </div>
        </div>

        {/* Adres */}
        <div>
          <h3 style={styles.sectionTitle}>Adres</h3>
          <textarea
            id="address"
            name="address"
            value={form.address}
            onChange={handleChange}
            
            style={{ ...styles.textarea, ...styles.inputFullWidth }}
            rows={3}
          />
        </div>

        {/* Yetkili Kişi */}
        <div>
          <h3 style={styles.sectionTitle}>Yetkili Kişi</h3>
          <div style={styles.grid3}>
            <div>
              <label htmlFor="authorizedPersonFirstName" style={styles.label}>
                Ad
              </label>
              <input
                id="authorizedPersonFirstName"
                name="authorizedPersonFirstName"
                type="text"
                value={form.authorizedPersonFirstName}
                onChange={handleChange}
                
                style={styles.input}
              />
            </div>
            <div>
              <label htmlFor="authorizedPersonLastName" style={styles.label}>
                Soyad
              </label>
              <input
                id="authorizedPersonLastName"
                name="authorizedPersonLastName"
                type="text"
                value={form.authorizedPersonLastName}
                onChange={handleChange}
                
                style={styles.input}
              />
            </div>
            <div>
              <label htmlFor="authorizedPersonTitle" style={styles.label}>
                Ünvan
              </label>
              <input
                id="authorizedPersonTitle"
                name="authorizedPersonTitle"
                type="text"
                value={form.authorizedPersonTitle}
                onChange={handleChange}
                
                style={styles.input}
              />
            </div>
            <div>
              <label htmlFor="authorizedPersonEmail" style={styles.label}>
                Email
              </label>
              <input
                id="authorizedPersonEmail"
                name="authorizedPersonEmail"
                type="email"
                value={form.authorizedPersonEmail}
                onChange={handleChange}
                
                style={styles.input}
              />
            </div>
            <div>
              <label htmlFor="authorizedPersonPhoneNumber" style={styles.label}>
                Telefon
              </label>
              <input
                id="authorizedPersonPhoneNumber"
                name="authorizedPersonPhoneNumber"
                type="tel"
                value={form.authorizedPersonPhoneNumber}
                onChange={handleChange}
               
                style={styles.input}
              />
            </div>
          </div>
        </div>

        {/* Belgeler */}
        <div>
          <h3 style={styles.sectionTitle}>Belgeler</h3>
          <div style={styles.grid2}>
            {[
              { label: 'Sözleşme', name: 'contractDocument',},
              { label: 'Vergi Levhası', name: 'taxPlateDocument',},
              { label: 'İmza', name: 'signatureDocument',},
              { label: 'Ticaret Sicil Gazetesi', name: 'tradeRegistryGazetteDocument',},
              { label: 'Faaliyet Belgesi', name: 'activityCertificateDocument',},
              { label: 'Kimlik', name: 'identityDocument',},
            ].map(({ label, name, placeholder }) => (
              <div key={name}>
                <label htmlFor={name} style={styles.label}>
                  {label}
                </label>
                <input
                  id={name}
                  name={name}
                  type="text"
                  value={form[name]}
                  onChange={handleChange}
                  
                  style={styles.input}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Açıklama */}
        <div>
          <h3 style={styles.sectionTitle}>Açıklama</h3>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            style={{ ...styles.textarea, ...styles.inputFullWidth }}
            rows={3}
          />
        </div>

        {/* Butonlar */}
        <div style={styles.buttons}>
          <button
            type="button"
            onClick={handleCancel}
            style={styles.btnCancel}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#805ad5')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#6b46c1')}
          >
            Temizle
          </button>
          <button
            type="submit"
            style={styles.btnSubmit}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#434190')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#5a67d8')}
          >
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
}
