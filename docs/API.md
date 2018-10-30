# Academic Email Verifier API
**Author**: Benny Megidish

## Constants

<dl>
<dt><a href="#domainsBasePath">domainsBasePath</a></dt>
</dl>

## Functions

<dl>
<dt><a href="#isValidEmailAddress">isValidEmailAddress(emailAddress)</a> ⇒ <code>boolean</code></dt>
<dd><p>check&#39;s if the email address is valid (in an proper email format - RFC 2822)</p>
</dd>
<dt><a href="#domainToUrl">domainToUrl(emailAddress)</a> ⇒ <code>string</code></dt>
<dd><p>converts tld to url format</p>
</dd>
<dt><a href="#isAcademic">isAcademic(emailAddress)</a> ⇒ <code>Promise.&lt;boolean&gt;</code></dt>
<dd><p>check&#39;s if thr email address is academic</p>
</dd>
<dt><a href="#getInstitutionName">getInstitutionName(emailAddress)</a> ⇒ <code>Promise.&lt;string&gt;</code></dt>
<dd><p>query email address institution name</p>
</dd>
</dl>

<a name="domainsBasePath"></a>

## domainsBasePath
Exposes academic email verifier API

<a name="isValidEmailAddress"></a>

## isValidEmailAddress(emailAddress) ⇒ <code>boolean</code>
check's if the email address is valid (in an proper email format - RFC 2822)

**Kind**: global function
**Returns**: <code>boolean</code> - true, if email address is valid, false, otherwise

| Param | Type | Description |
| --- | --- | --- |
| emailAddress | <code>string</code> | email address to be checked |

<a name="domainToUrl"></a>

## domainToUrl(emailAddress) ⇒ <code>string</code>
converts tld to url format

**Kind**: global function
**Returns**: <code>string</code> - tld as url

| Param | Type | Description |
| --- | --- | --- |
| emailAddress | <code>string</code> | email address to be checked |

<a name="isAcademic"></a>

## isAcademic(emailAddress) ⇒ <code>Promise.&lt;boolean&gt;</code>
check's if thr email address is academic

**Kind**: global function
**Returns**: <code>Promise.&lt;boolean&gt;</code> - true, if email address is academic, false, otherwise

| Param | Type | Description |
| --- | --- | --- |
| emailAddress | <code>string</code> | email address to be checked |

<a name="getInstitutionName"></a>

## getInstitutionName(emailAddress) ⇒ <code>Promise.&lt;string&gt;</code>
query email address institution name

**Kind**: global function
**Returns**: <code>Promise.&lt;string&gt;</code> - academic institution name, if exist, '', otherwise

| Param | Type | Description |
| --- | --- | --- |
| emailAddress | <code>string</code> | email address to be checked |