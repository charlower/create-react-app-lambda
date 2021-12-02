import { Container, Row, Col } from "reactstrap";

const letsencrypt =
  require("../../assets/img/letsencrypt-logo-horizontal.svg").default;

function Security() {
  return (
    <>
      <div className="main-content" style={{ overflowX: "hidden" }}>
        <section className="my-8">
          <Container className="position-relative">
            <Row>
              <Col md="8">
                <div>
                  <h2>Security Information</h2>
                  <h3>How to protect yourself</h3>
                  <p>Password Security</p>
                  <p>
                    You should make sure that you keep your password secure. The
                    first step is choosing a secure password. In general, the
                    longer your password, the better and more secure it is. Your
                    password does not have to be just a single word, it can
                    contain spaces, numbers, punctuation, and Unicode characters
                    (I.E. non Latin characters including Chinese letters, etc.).
                    Therefore, you can use an entire phrase or sentence as your
                    password, or part of your password, to help make it as long
                    as possible. However, be careful not to use only dictionary
                    words, as this makes it easier for an attacker to guess.
                    Consider avoiding this by mixing up the cApiTalisATIOn,
                    adding digits3473, or ext,,ra p_unctua(tio%n [sic], for
                    example, or even including nonsense words that are not found
                    in any dictionary (or existing movie or literature).
                    However, making your password long is much more important
                    for security than making it look complicated with numbers
                    and capital letters, so consider using an entire sentence or
                    short paragraph as your password, but not one copied from a
                    book, a new one invented by yourself.
                  </p>
                  <p>
                    Avoid simple, common passwords like '12345', or,
                    'password',. Avoid using anything that an attacker would
                    easily be able to guess from context, including your name,
                    the websites name, your birthday or any other important date
                    in your life, the name of your pets, family, partner,
                    fictional characters, etc.
                  </p>
                  <p>
                    Do not reuse passwords across multiple services - create a
                    new password for every service that requires one. Also, when
                    changing passwords, do not change to one that you have used
                    previously. Check{" "}
                    <a href="https://haveibeenpwned.com/">haveibeenpwned </a>to
                    see if any of your existing accounts are known to be
                    compromised.
                  </p>
                  <p>
                    Ideally, you will be able to remember a long passphrase, but
                    if you are unable to, it is a better compromise to write
                    down your password somewhere secure, rather than to not
                    choose a secure password at all. If you do this, though,
                    make sure the password is *only* stored in a secure place
                    (your purse or wallet, perhaps). Do not write it on a sticky
                    note and store it permanently on or near your computer, for
                    example, especially if your computer is located in a shared
                    space like an office or family home.
                  </p>
                  <p>
                    As an alternative to trying to memorise long passwords (or
                    writing them down) for each website you use, you might
                    consider using a password manager. Password managers are
                    programs or browser plugins you can install which you
                    generating unique, secure passwords for every service you
                    use. It will encrypt these with a single password -- now the
                    only one that you have to remember. The disadvantage is that
                    you must now have a copy of your password file and password
                    manager on each computer which you need to login from.
                    Additionally, if you loose your password database (or your
                    computer crashes, etc.), you will not be able to login.{" "}
                    <a href="https://en.wikipedia.org/wiki/List_of_password_managers">
                      Wikipedia
                    </a>{" "}
                    Maintains a list of password managers for your comparison.
                  </p>
                  <p>
                    Avoid telling your password to other people. If multiple
                    people need to use the service, consider getting them to
                    create their own account instead.
                  </p>
                  <p>
                    Avoid logging into the service from other peoples computers,
                    shared computers, and especially public computers (such as
                    at a school or library). Since many people use these
                    computers, their security is outside of your control.
                  </p>
                  <p>
                    Avoid logging into the service from a public place. If you
                    are using a mobile phone, for example, be very aware of what
                    is behind you. People may be looking over your shoulder, and
                    there might also be security cameras, mirrors, or other
                    reflective surfaces like windows or glasses.
                  </p>
                  <p>
                    Finally, regularly change your password; at least every 2 or
                    3 months for example. This will mean that even if your
                    password is compromised, the amount of time that an attacker
                    has to take control is limited.
                  </p>
                  <p>
                    If you follow all of these tips, your password will surely
                    remain secure!
                  </p>
                  <hr />
                  <h3>How we protect you</h3>
                  <p>TLS</p>
                  <p>
                    All of your connections to Merchi are secured over the
                    industry best practice HTTPS protocol. This uses 'TLS' (the
                    successor of SSL) to encrypt all data that you send on it's
                    way to us, preserving your privacy and stopping attackers
                    from being able to change your data.
                  </p>
                  <p>
                    We regularly review our TLS configuration to make sure it is
                    resilient against all known attacks, even theoretical only
                    ones. More technical users may want to study our
                    configuration for themselves at{" "}
                    <a href="https://www.ssllabs.com/ssltest/analyze.html?d=merchi.co">
                      SSLLabs Testing Tool
                    </a>
                    . At the time of writing, it gives Merchi an 'A+' rating.
                  </p>
                  <p>
                    HSTS (HTTP Strict Transport Security) is enabled on Merchi
                    to protect you from HTTPS downgrade attacks and cookie
                    hijacking.
                  </p>
                  <p>HTTPS Certificates</p>
                  <p>
                    Merchi uses Let's Encrypt™ to help your browser verify that
                    you are always talking to Merchi, and that an attacker, even
                    including your ISP, is not able to intercept your
                    connection.
                  </p>
                  <img
                    style={{ width: "100%", maxWidth: 150 }}
                    src={letsencrypt}
                  />
                  <hr />
                  <h3>Information for reasearchers</h3>
                  <p>
                    Merchi is not currently running any form of bug bounty
                    program. Nonetheless, we welcome vulnerability reports from
                    security researchers. We warrant that we will act in good
                    faith and have no interest in prosecuting or attacking
                    legitimate researchers for their efforts, and that should we
                    confirm any reported vulnerability, we will make every
                    effort to resolve it as quickly as possible. We ask that
                    researchers abide by the following:
                  </p>
                  <ul>
                    <li>
                      Report any vulnerabilities you find as soon as possible
                    </li>
                    <li>
                      Wait at least 90 days from the report before publishing
                      anything about any vulnerability you may find
                    </li>
                    <li>
                      Avoid making Denial of Service attacks against the service
                    </li>
                    <li>
                      Do not download or obtain any sensitive data (including
                      customer data, source code, etc.) beyond the minimum
                      required for vulnerability or attack proof-of-concept
                    </li>
                    <li>
                      If you obtain sensitive data, please immediately delete
                      your copies, and do not publish or forward it to anyone
                    </li>
                  </ul>
                  <p>
                    If you believe that you have found a bug, please report it
                    via email to security@merchi.co. If your bug report is
                    sensitive, you may use the following PGP key:
                  </p>
                  <textarea
                    style={{
                      width: "100%",
                      minHeight: 1100,
                      resize: "vertical",
                      color: "#525f7f",
                      padding: 20,
                      border: "1px solid #cbd0ea",
                      borderRadius: 3,
                      fontSize: 16,
                    }}
                    value="
                    -----BEGIN PGP PUBLIC KEY BLOCK----- mQINBFYcSX4BEADUYyeB1C0eJPLhM/PC5GCSo1KJh9ZKhCQJ5ZNW+VfGutbcZj2D 6WPrb1urVCm79GOVyI5MQrzJYI7QUEztQiobIRhx5BcXyYYLPwi/5CfHEnVDzVbH 0Vj9ca49VEQbW7YuKfyWkpC/Auk2I2SUGtqN80F9Xj/9CwRpPEhCQy1xM0w4TpXR SEo6anJnp3ok5aChltauxdDPYrt0kk0l1zLB4ealLxQmNcWRkU3iDwBKG0zlLMRy kGcjUZolFUIZq6jiwJKf0ckUiCOI/fHkiqCfCScben7JV2wIWQ2bZGqNxzFfZRy+ gjVeAxtsJNkJUL5mj5sj3hEc3dD1DGELSx9Ej1Quz/4xQSy1JZVGYOkPe/+r/0ny n3K2XSOZDkDyKTdpKhq9U7NqLu5Tlt0PU/mFjjDU0Rv+71VxIOYtRR1P2YSh8TL/ WqBlBd5MtcOBBjT58E85OaLYxtvY+botjYot9GaR3+SynvdDC/cCgPTzFH2FCQQe RDXUshyq9MynZaI286JgQ4kgY4KX6ScmyM5m/ypchfPtu+BId/M7IZzZikICdsOv lBjh80dIAzck/1duQ7oEjDvOZybL1tJ2U2rKGxrtTSyhC/itlgrGz6FL+WD/3fUC fOKgdf9CWAyKbGxoxcaaXczZ7aML16yqh6eIbSytrTrnRn9Jq31ZRGVfVQARAQAB tCBqYW1lcyBjb29sIDxqYW1lc0B1bml0aXguY29tLmF1PokCPQQTAQoAJwUCVhxJ fgIbAwUJB4YfgAULCQgHAwUVCgkICwUWAgMBAAIeAQIXgAAKCRCEL73wACJDHE7R D/wIaGxNyKqvDT12b5U2AyPXwQPduxpq0/Bc6tczkv/JtNUurIxLhcbY9SNNfyj6 G1APOuNf0rpynaTvooCP2mFBaObzk0RbZl+Q18ikC/uXlmYR7CB2OpZZJdvU0u5s TkRVgVpeghbQT7YpfnAfOBtgHDxpJUihPS31/ZRUH5x2N61axRaFgTTZOdA07Nu7 EJE3lRedlslyWUIU2wuMuANEYkmBVpPR+6WYqiIxHhZhzP7SlKj99lSp6dTTWR/F oVl+LCCxInP58aRY9PmbN6u2Yu8/jx3Yt/jbXT8RG11uxJCDTkWDn4MMlya0iBMO R4I4PzbsxA6w2wgp4aWxjxylZGL28XhWf6+ycdKGOhgs6+F+yo2ynCGXNTCXcM36 FqGxLTAV+ZlM2n2nQ3fr4wSXGkWrHOHHX9REVQ6MMWQP3SygwNinUVEii7ubjOV0 CUtCXdCV3FbuWVA15cfgo3+1PP4OMJU3KUyaCxrJ6c4F6zX+MWpKeWW2g9hpnUqt o8yEJd4Rq9kcESmYZ3Rc3dg/vfPHGhn16TJcABI7CYqCdeJ495810scRGdZbSaNE KcqCpNzK3w0CNilvQvWWo/sEUeL1aDrZ0y+3ocJ+tS8xE/m/sXZXKrDssFVhLRy+ T5ExOnUoRolNnTv4/C2GSSUp0Av6xxdLHeRurfh2rka95YkCHAQQAQoABgUCVl7Q KwAKCRBEdLUOaDDaDhybEACSnj7RmOnie1wDwQUEtS+Bzstd4YmwFFgW0HjTJqQm DgqS9i2zudZ/a0ZHcDzArMaGFIdhhVJLONXXZHIuvRwJI07DZBsho6xJlon+BJKI 3V50iTCpRCGhRtCrLnB561OHjNb8hLICw7U44cc4OioiJOZfaJS8TxF23XcwadTB ys8//7S8mpBVoVnuKzOFqrozN9g/WvuZwMcEW6jGlDxn/M1keSNotoq903XfN/hR 3RVxIIZeFhycZ0ZbI/eb4/5Pkwo+qbSuCnsk8qOizbb/3QAc4gF6q8lfJ/5o6w/X 9w+3y33OXzXpNgsjFO0gL9D1l0XAsyk2+fODS2VPP5ID64yCPw5WmkFTREI62vSF iWsyDuMMNJiQSI4SPIOMcl95RzivT83eTYafsuUkLgwpLKOY3MPw0/+iukhPJ+e4 VUU3JyDd9wtkSQ17oK/avwDvGVeYH8lVgWik3MXBsBfXZuaqfwhhM7jXev/RjLwO hTHkdbIQD2UbnBSshuFuT3Nj/ix3RDaBRRWei6eef2EPwqoLLHs9WG8xv8dVYwtY mZWzGkM5hi1aup7wiePfj4lfsBuJ1dByNX+FLWQ2s3QYKSd2xeMiaqZmKMQgv2CJ TI6J0g2tcDv3jyr73jJetKDIx/m4jupeRQWhgnF6VYMRnN5sfGfzEtupmet0aWRP 77kCDQRWHEl+ARAAymTYy+59ZUb6Y4Taz6S6Km3if31Ho1nOkwy3JDUnq9FvsPcP Zo/H8xhSUt7FeOlZ2QY52z24lQ4upGomzEFh/7b256W1HxokVLfpUeA0ocdkkFTw aXRtDGOjWiCnvlftokNcjppOu06qByM7UTEsy0mMwaAVgxG36wOiUbwnGH8SU4Sr RBc5/YXAYLA4rd/3rOJuaRTCH3Wfn/cryxhol8taoHsI8cQs9BSmUeiGplx4iiJ/ +OG28wsiiaTSax+UNcrs4CUy1ZdjY09MFKZ9HhGznDaLttx/jQ1kD6raNenH3A4d cSbSZsDfBF7llICQGsgzNnmXfBtvQvOGdG1agSNQAmXCAF18Vw1ZClhx3aE8KC5M F+YGwij2/w7ix/fQaMiJqCT40mmkTfVzaaXuX2jpIp10/FpWdHEmfd/QmP+0quO0 fpcQSbep4rJ1g4Dfe4bC1rq0zBsiVrz4VCh4qYU0k1jcOP76pHMzJWincEcl+YjS ZTi0/VzorL0G2/+Km5iaGWhnKnOkWVZuuYzfhnHvt7Tj3pow65nfKj7YAa4qTtIv uX/dM10/jj8+cX4+vCsNpxbglHVCVQKJ0O9y4yF2gBPct4pO2GuK897/jm+4pP8Z LXjUpYNzzI0uf+Nrk16m93uF2NDm9Y9deTezff2LdDzk9F+HWMeqNJH8bscAEQEA AYkCJQQYAQoADwUCVhxJfgIbDAUJB4YfgAAKCRCEL73wACJDHGWhEADKZFU9nwNQ RnrP7o7/rIQ5JEBqTIBOucfV75+CHH/jygIofCxVcBhsgnXYsb6rb5gZkLJC8BOO VOQhWJK7m9dptilvqbwK3tj1gDHQSNEqcbJDtg/1MufruRKw4WPMlKUT3XJoWzrU 8d6ZBPuPRphhqoEuXp4tsLGqZzUB6zar2HERFoXnd4gz8Ho31fALwdGLiVpao21w 7Dhd0mH0fuAXgPA7rpeMjw0Au3hnRLvLW6Z/3Ho6tX3lZhm/IZd1nPC8h6rJADS7 KhCSUNprAJNSupDGTjhH2pguJJpBPWgJAJpxygFobzOflqrUU3AQtVcLK2QfRXzm yg5Tbser11Mbp1N4qyDqfFYTFJMPYcbsJL61pTZAvBgBPJqjT/NmGxEPADAmN2zZ pwG7P2ZXoANtrDibe/BNq0gHD+Gto8DIJms/qKhRHW2xy3GhuNu2bTJe+x905K5n CddHCKjQGsafyAYS0GOI75xGvtdl5G7bxHeniiuXX/sm4Ueme3QKqHW6QgsbE7VP RjvCz1Vp1+0pteRlSAMf0wAfPeSEBmr4V3K1cJnyyDpfoP3D0Esiskxvwq4F+Jzt 2zsQkGzgboUq/fMkQO+fYwcwmq2PTUetWAud1+n9MHiIYK83vzE+kfcv/gQrpiuF ps36IZqv7qVXPynJorGLksL+zgrxbsP4ug== =yhqe -----END PGP PUBLIC KEY BLOCK-----
                    "
                  ></textarea>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}

export default Security;
