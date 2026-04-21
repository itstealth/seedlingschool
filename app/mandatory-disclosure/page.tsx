import React from 'react';
import type { Metadata } from 'next';
import styles from './mandatory.module.css';

export const metadata: Metadata = {
  title: 'Mandatory Public Disclosure | Seedling Public School, Jaipur',
  description: 'Mandatory public disclosure information for Seedling Public School (SPS), Jaipur, as per CBSE Affiliation Bye-Laws. Includes school info, affiliation status, and certificates.',
  keywords: 'Seedling Public School, Jaipur, Mandatory Disclosure, CBSE Compliance, School Information, Affiliation Status',
};

const MandatoryDisclosure = () => {
  return (
    <div className={styles.pageWrap}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <span>
            SPS: <a href="tel:+917413012351">+91 74130 12351</a> &nbsp;|&nbsp; 
            SMHS: <a href="tel:+919587772837">+91 95877 72837</a>
          </span>
          <span>
            <a href="mailto:seedlingacademy@hotmail.com">seedlingacademy@hotmail.com</a>
          </span>
        </div>
        <div className={styles.headerMain}>
          <div className={styles.logoCircle}>
            <div className={styles.logoInner}>
              <div className={styles.logoLeaf}></div>
            </div>
          </div>
          <div className={styles.schoolName}>
            <h1>Seedling Public School</h1>
            <p>Sector-4, Jawahar Nagar, Jaipur — Affiliated to CBSE</p>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBadge}>CBSE Compliance</div>
        <h2>Mandatory Public Disclosure</h2>
        <p>As per CBSE Affiliation Bye-Laws, the following information is disclosed for Seedling Public School (SPS), Jaipur</p>
      </section>

      <main className={styles.content}>
        {/* Section 1: School Info */}
        <div className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionNum}>1</div>
            <h3 className={styles.sectionTitle}>School Information</h3>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Name &amp; Address</div>
            <div className={styles.infoValue}>
              <strong>Seedling Public School</strong><br />
              Sector-4, Park Lane, Jawahar Nagar, Jaipur — 302004
            </div>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Email</div>
            <div className={styles.infoValue}>
              <a href="mailto:seedlingacademy@hotmail.com">seedlingacademy@hotmail.com</a>
            </div>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Phone No.</div>
            <div className={styles.infoValue}>0141-7193000</div>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Fax No.</div>
            <div className={styles.infoValue}>0141-2561684</div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className={styles.sectionCard}>
          <div className={styles.statsRow}>
            <div className={styles.statBox}>
              <div className={styles.statVal}>1992</div>
              <div className={styles.statLbl}>Year Established</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statVal}>10441</div>
              <div className={styles.statLbl}>School Code</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statVal}>3330</div>
              <div className={styles.statLbl}>Campus (sq. mtrs.)</div>
            </div>
          </div>
        </div>

        {/* Section 2: Affiliation Status */}
        <div className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionNum}>2</div>
            <h3 className={styles.sectionTitle}>Affiliation Status</h3>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Status</div>
            <div className={styles.infoValue}>
              <span className={`${styles.statusBadge} ${styles.statusProv}`}>Provisional</span>
            </div>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Affiliation Number</div>
            <div className={styles.infoValue}>1730084</div>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Affiliated Since</div>
            <div className={styles.infoValue}>1993</div>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Affiliation Valid Upto</div>
            <div className={styles.infoValue}>31 March 2025</div>
          </div>
        </div>

        {/* Section 3: Trust / Society Details */}
        <div className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionNum}>3</div>
            <h3 className={styles.sectionTitle}>Trust / Society Details</h3>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Name of Trust / Society</div>
            <div className={styles.infoValue}>Mahima Shiksha Samiti</div>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Registration Valid Upto</div>
            <div className={styles.infoValue}>10 May 2024</div>
          </div>
        </div>

        {/* Section 4: Documents & Certificates */}
        <div className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionNum}>4</div>
            <h3 className={styles.sectionTitle}>Documents &amp; Certificates</h3>
          </div>
          <div className={styles.docsGrid}>
            {[
              { id: '(i)', name: 'Affiliation / Upgradation Letter', url: 'https://seedlingschools.com/mandatory-discloser/Affiliation-Upgradation-Letter.pdf' },
              { id: '(ii)', name: 'Trust Registration Certificate', url: 'https://seedlingschools.com/mandatory-discloser/Trust-Registration-Certificate.pdf' },
              { id: '(iii)', name: 'No Objection Certificate (State Govt.)', url: 'https://seedlingschools.com/mandatory-discloser/NOC-By-State-Govt.pdf' },
              { id: '(iv)', name: 'Recognition Certificate under RTE Act 2009', url: 'https://seedlingschools.com/mandatory-discloser/RTE.pdf' },
              { id: '(v)', name: 'Building Safety Certificate', url: 'https://seedlingschools.com/mandatory-discloser/Building-Safety-Certificate.pdf' },
              { id: '(vi)', name: 'Fire Safety Certificate', url: 'https://seedlingschools.com/mandatory-discloser/Fire-Safety.pdf' },
              { id: '(vii)', name: 'Water, Health & Sanitation Certificate', url: 'https://seedlingschools.com/mandatory-discloser/Watar-Health.pdf' },
              { id: '(viii)', name: 'Fee Structure', url: 'https://seedlingschools.com/mandatory-discloser/Fee%20structure%20PDF.pdf' },
              { id: '(ix)', name: 'DEO Certificate', url: 'https://seedlingschools.com/deo-certificate.php' },
              { id: '(x)', name: 'Annual Academic Calendar', url: 'https://seedlingschools.com/mandatory-discloser/Year-Planner-2024-25.pdf' },
              { id: '(xi)', name: 'List of School Management Committee (SMC)', url: 'https://seedlingschools.com/smc.php' },
              { id: '(xii)', name: 'List of PTA Members', url: 'https://seedlingschools.com/pta-members.php' },
              { id: '(xiii)', name: 'Last 3 Years Board Exam Results', url: 'https://seedlingschools.com/last-three-year-result.php' },
              { id: '(xiv)', name: 'Fire Fighting Certificate', url: 'https://seedlingschools.com/mandatory-discloser/Fire-Fighting-Certificate.pdf' },
            ].map((doc, idx) => (
              <div key={idx} className={styles.docItem}>
                <div className={styles.docIcon}>
                  <svg viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <div className={styles.docContent}>
                  <div className={styles.docNum}>{doc.id}</div>
                  <div className={styles.docName}>{doc.name}</div>
                </div>
                <a href={doc.url} className={styles.viewBtn} target="_blank" rel="noopener noreferrer">View</a>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Infrastructure & Facilities */}
        <div className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionNum}>5</div>
            <h3 className={styles.sectionTitle}>Infrastructure &amp; Facilities</h3>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Campus Area</div>
            <div className={styles.infoValue}>3330.28 sq. mtrs.</div>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Internet Facility</div>
            <div className={styles.infoValue}>
              <span className={styles.statusBadge}>✓ Available</span>
            </div>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Gymnasium</div>
            <div className={styles.infoValue}>
              <span className={styles.statusBadge}>✓ Available</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© <span>Seedling Group of Schools</span> | All Rights Reserved | Mandatory Disclosure as per CBSE Affiliation Bye-Laws</p>
      </footer>
    </div>
  );
};

export default MandatoryDisclosure;