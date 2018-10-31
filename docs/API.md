# Academic Email Verifier API

<a name="Verifier"></a>

## Verifier
Exposes academic email verifier API

**Kind**: global class
**Author**: Benny Megidish

* [Verifier](#Verifier)
    * [.isValidEmailAddress(emailAddress)](#Verifier.isValidEmailAddress) ⇒ <code>boolean</code>
    * [.domainToUrl(emailAddress)](#Verifier.domainToUrl) ⇒ <code>string</code>
    * [.isAcademic(emailAddress)](#Verifier.isAcademic) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.getInstitutionName(emailAddress)](#Verifier.getInstitutionName) ⇒ <code>Promise.&lt;string&gt;</code>

<a name="Verifier.isValidEmailAddress"></a>

### Verifier.isValidEmailAddress(emailAddress) ⇒ <code>boolean</code>
check's if the email address is valid (in an proper email format - RFC 2822)

**Kind**: static method of [<code>Verifier</code>](#Verifier)
**Returns**: <code>boolean</code> - true, if the email address is valid, false, otherwise

| Param | Type | Description |
| --- | --- | --- |
| emailAddress | <code>string</code> | email address to be checked |

<a name="Verifier.domainToUrl"></a>

### Verifier.domainToUrl(emailAddress) ⇒ <code>string</code>
converts tld to url format

**Kind**: static method of [<code>Verifier</code>](#Verifier)
**Returns**: <code>string</code> - tld as url

| Param | Type | Description |
| --- | --- | --- |
| emailAddress | <code>string</code> | email address to be converted |

<a name="Verifier.isAcademic"></a>

### Verifier.isAcademic(emailAddress) ⇒ <code>Promise.&lt;boolean&gt;</code>
check's if the email address is academic

**Kind**: static method of [<code>Verifier</code>](#Verifier)
**Returns**: <code>Promise.&lt;boolean&gt;</code> - true, if the email address is academic, false, otherwise

| Param | Type | Description |
| --- | --- | --- |
| emailAddress | <code>string</code> | email address to be checked |

<a name="Verifier.getInstitutionName"></a>

### Verifier.getInstitutionName(emailAddress) ⇒ <code>Promise.&lt;string&gt;</code>
query email address institution name

**Kind**: static method of [<code>Verifier</code>](#Verifier)
**Returns**: <code>Promise.&lt;string&gt;</code> - academic institution name, if exist, '', otherwise

| Param | Type | Description |
| --- | --- | --- |
| emailAddress | <code>string</code> | email address to be checked |