function showForm() {
    let type = document.getElementById('noteType').value;

    // Hide all forms first
    document.getElementById('note1Form').style.display = 'none';
    document.getElementById('note2Form').style.display = 'none';
    document.getElementById('note3Form').style.display = 'none';

    // Show the chosen form
    if (type === 'note1') document.getElementById('note1Form').style.display = 'block';
    if (type === 'note2') document.getElementById('note2Form').style.display = 'block';
    if (type === 'note3') document.getElementById('note3Form').style.display = 'block';

    // Show preview and buttons if a form is selected
    if (type) {
        document.getElementById('output').style.display = 'block';
        document.getElementById('copyBtn').style.display = 'inline-block';
        document.getElementById('resetBtn').style.display = 'inline-block';
    } else {
        document.getElementById('output').style.display = 'none';
        document.getElementById('copyBtn').style.display = 'none';
        document.getElementById('resetBtn').style.display = 'none';
    }

    updatePreview();
}

function updatePreview() {
    let type = document.getElementById('noteType').value;
    let text = "";

    if (type === 'note1') {
        text =
`Product affected(Domain | Prod Instance ID): ${document.getElementById('product').value}
How to Replicate/Reproduce the issue/error: ${document.getElementById('replicate').value}
Error Message (if there is one): ${document.getElementById('error').value}
Desired Result: ${document.getElementById('result').value}
What was done/Troubleshooting done: ${document.getElementById('troubleshooting').value}
F-Case: ${document.getElementById('fcase').value}
Additional Notes: ${document.getElementById('notes').value}
How would the client like to be contacted(email or phone)? ${document.getElementById('contact').value}
Newfold Email: ${document.getElementById('email').value}`;
    } 
    else if (type === 'note2') {
        text =
`F-case: ${document.getElementById('fcase2').value}
The domain name we are launching the website: ${document.getElementById('domainLaunch').value}
Verified the domain is either registered with us or pointed to us: ${document.getElementById('verifiedDomain').value}
Did the customer purchase an SSL?: ${document.getElementById('sslPurchase').value}
Team (PPCC or Other): ${document.getElementById('team').value}
Newfold Email: ${document.getElementById('email2').value}`;
    }
    else if (type === 'note3') {
        text =
`CID: ${document.getElementById('cid').value}
CPROD: ${document.getElementById('cprod').value}
PHONE#: ${document.getElementById('phone').value}
NAME: ${document.getElementById('name').value}
AUTHENTICATED (Y/N): ${document.getElementById('authenticated').value}
DOMAIN: ${document.getElementById('domain').value}
CONCERN: ${document.getElementById('concern').value}
ACTION DONE: ${document.getElementById('actionDone').value}
NEXT ACTION: ${document.getElementById('nextAction').value}
OSAD (Y/N) REASON: ${document.getElementById('osadReason').value}`;
    }

    document.getElementById('output').textContent = text;
}

function copyNotes() {
    let text = document.getElementById('output').textContent;
    if (text.trim() !== "") {
        navigator.clipboard.writeText(text).then(() => {
            alert("Notes copied to clipboard!");
        });
    } else {
        alert("Please fill in some fields before copying.");
    }
}

function resetForm() {
    document.getElementById('noteType').value = "";
    document.getElementById('note1Form').reset?.();
    document.getElementById('note2Form').reset?.();
    document.getElementById('note3Form').reset?.();
    document.getElementById('note1Form').style.display = 'none';
    document.getElementById('note2Form').style.display = 'none';
    document.getElementById('note3Form').style.display = 'none';
    document.getElementById('output').style.display = 'none';
    document.getElementById('copyBtn').style.display = 'none';
    document.getElementById('resetBtn').style.display = 'none';
}
