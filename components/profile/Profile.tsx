import { Row, Col, Avatar } from 'antd'
import React from 'react'
import styles from './profile.module.css'

const Profile = () => (
  <section className={styles.row} style={{ padding: '30px' }}>
    <div className={styles.column}>
      <Avatar
        src="/images/profile-pic.jpeg"
        size={400}
        className={styles['profile-pic']}
      />
    </div>
    <div className={styles.column}>
      <h1 className={styles.about} style={{ fontWeight: 'bold' }}>
        About Me
      </h1>
      <p>
        The film opens with a woman, Flora Bosch, walking her dog down an empty,
        darkened city street. As she passes by a manhole, a creature attacks
        Mrs. Bosch and drags her and the dog into the sewers. George Cooper, a
        once-prominent fashion photographer, has since forgone fame and fortune
        and is living with his girlfriend Lauren. His current project is
        photographing New York City's homeless population, specifically those
        known as "undergrounders", or people who reside within the bowels of the
        city. NYPD Captain Bosch has a personal interest in the recent flood of
        missing persons being reported to his precinct, as Flora, his wife,
        remains missing. Bosch interviews A.J. "The Reverend" Shepherd, who runs
        the local homeless shelter. A.J. believes that the recent events are
        part of a massive government cover-up and has the evidence to prove it.
        Bosch's superiors know more than they are letting on and seem to be
        taking their cues from Wilson, who works for the Nuclear Regulatory
        Commission (NRC). It turns out that monsters are lurking beneath the
        streets; beings that were once human, but have been mutated by
        radioactive, chemical toxic waste into hideous, flesh-eating creatures
        that prey on the homeless who live in the underground. Given the recent
        drop in the underground transient population, the creatures have
        resorted to coming to the surface through sewer manholes to feed.
        Through a series of events, both George and A.J. find themselves trapped
        in the sewers, a reporter gets involved and eaten, and Lauren has a
        problem with both a clogged shower drain and a mutant that comes up
        through the sewer access point that she opened in the basement of her
        apartment building. A.J. and George meet up and discover that the
        Nuclear Regulatory Commission is directly involved in the slaughter that
        has been going on. Although the political bureaucracy has forbidden the
        NRC to transport the toxic wastes through New York because of the
        large-scale danger to the public, it has secretly been hiding the waste
        by-products, marked as "Contamination Hazard Urban Disposal", beneath
        Manhattan in the abandoned subway tunnels. The underground homeless
        population has been coming into contact with these by-products, turning
        them into the mutated creatures. To protect this secret, Wilson plans to
        seal the sewers, open up some gas lines and asphyxiate the C.H.U.D.s and
        any witnesses of their existence, despite the inherent danger to the
        city. In the meantime, Lauren is attacked by the mutants in her
        apartment and narrowly escapes them. Later that evening at a diner, two
        police officers and the waitress are killed and carried off by the
        mutants, finally drawing the public's attention to the disappearances.
        George and A.J. recover a camera set left behind by an NRC crew slain by
        the mutants during a previous clean-up attempt and use it to report
        their findings to Bosch. Confronted by Bosch, Wilson runs off, and later
        shoots Bosch while the latter helps A.J. and George escape from a
        manhole. Wilson then tries to run George and A.J. over with a truck, but
        A.J. fatally shoots Wilson with Bosch's gun, and the truck explodes as
        it drives into the manhole.
      </p>
    </div>
  </section>
)

export default Profile
