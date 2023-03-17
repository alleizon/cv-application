function getWorkTemplate() {
  return {
    header: {
      position: "Enter your job position here",
      company: "Company",
      location: "Location",
      start: "2012",
      end: "2014",
    },
    info: [
      "Click on the fields above to edit them",
      "Click on the bullet point fields to edit them",
      "Delete text from a bullet point to remove it",
    ],
  };
}

function getEducationTemplate() {
  return {
    title: "Degree Title",
    school: "University / College",
    from: "2012",
    to: "2016",
  };
}

export { getEducationTemplate, getWorkTemplate };
