function skillsMember()
{
    var member = document.getElementById('member');
    var skills = document.getElementById('skills');
    var search = document.getElementById('search');

    if (member.style.display === 'none')
    {
        member.style.display = 'block';
        skills.style.display = 'none';
        search.style.display = 'none';
    }
    else
    {
        member.style.display = 'block';
        skills.style.display = 'none';
        search.style.display = 'none';
    }
}