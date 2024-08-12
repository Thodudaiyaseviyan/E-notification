var DistrictList = [
    { Country: 'India', State: 'Maharashtra' },
    { Country: 'India', State: 'Delhi' },
    { Country: 'India', State: 'Punjab' },
    { Country: 'Us', State: 'Alabama' },
    { Country: 'Us', State: 'Arizona' },
    { Country: 'Us', State: 'California' },
    { Country: 'Other', State: 'Other' }
  ];
  var Taluklist = [
    { State: 'Maharashtra', city: 'Pune' },
    { State: 'Maharashtra', city: 'Mumbai' },
    { State: 'Maharashtra', city: 'Hydrabad' },
    { State: 'Delhi', city: 'New Delhi' },
    { State: 'Delhi', city: 'Balijt Vihar' },
    { State: 'Punjab', city: 'Ludhiyana' },
    { State: 'Punjab', city: 'Amritsar' },
    { State: 'Punjab', city: 'Patiyala' },
    { State: 'Punjab', city: 'Jalandhar' },
    { State: 'Alabama', city: 'Abbeville' },
    { State: 'Alabama', city: 'Adamsville' },
    { State: 'Arizona', city: 'Phoenix' },
    { State: 'Arizona', city: 'Tucson' },
    { State: 'Other', city: 'Other' }
  ];
  $(document).ready(function () {
    $(".divOtherCountry").hide();
    $(".divOtherState").hide();
    $(".divOtherCity").hide();
    $("#dpdlCountry").change(function () {
      if ($("#dpdlCountry").val() == "Other") {
        $(".divOtherCountry").show();
        const option = "<option val='Other'>Other</option>";
        $("#dpdlState").append(option);
      } else {
        $(".divOtherCountry").hide();
        $(".divOtherState").hide();
        $(".divOtherCity").hide();
        $("#dpdlState").html("<option selected>Choose State</option>");
        $("#dpdlCity").html("<option selected>Choose City</option>");
        const states = DistrictList.filter(m => m.Country == $("#dpdlCountry").val() || m.Country == "Other");
        states.forEach(element => {
          const option = "<option val='" + element.State + "'>" + element.State + "</option>";
          $("#dpdlState").append(option);
        });
      }
    });
  
    $("#dpdlState").change(function () {
      if ($("#dpdlState").val() == "Other") {
        $(".divOtherState").show();
        const option = "<option val='Other'>Other</option>";
        $("#dpdlCity").append(option);
      } else {
        $(".divOtherState").hide();
        $(".divOtherCity").hide();
        $("#dpdlCity").html("<option selected>Choose City</option>");
        const states = Taluklist.filter(m => m.State == $("#dpdlState").val() || m.State == "Other");
        states.forEach(element => {
          const option = "<option val='" + element.city + "'>" + element.city + "</option>";
          $("#dpdlCity").append(option);
        });
      }
    });
  
    $("#dpdlCity").change(function () {
      if ($("#dpdlCity").val() == "Other") {
        $(".divOtherCity").show();
      } else {
        $(".divOtherCity").hide();
      }
    });
  });
  