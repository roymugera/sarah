function menuOpen () {
  document.getElementById("side_menu").style.width = '250px';
}

function menuClose () {
  document.getElementById("side_menu").style.width = '0';
};

function sideView () {
  document.getElementById("side_menu").style.width = '0';
}


function getPageList(totalPages, page, maxLength) {
	function range (start, end) {
		return Array.from(Array(end - start +1), (_, i) => i + start);
	}

	var sideWidth = maxLength < 9 ? 1 : 2;
	var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
	var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

	if(totalPages <= maxLength) {
		return range(1, totalPages);
	}

	if(page <= maxLength - sideWidth - 1 - rightWidth) {
		return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
	}


	if(page >= totalPages - sideWidth - 1 - rightWidth){
		return range (1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
	}

	return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));

	}

	$(function(){
		var numberOfItems = $(".box-content .box").length;
		var limitPerPage = 9 //Number of box items visible per page
		var totalPages = Math.ceil(numberOfItems / limitPerPage)
		var paginationSize = 7; //How many page elements visible in the pagination
		var currentPage; 

		function showPage(whichPage) {
			if(whichPage < 1 || whichPage > totalPages) return false;

			currentPage = whichPage;

			$(".box-content .box").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

			$(".pagination li").slice(1, -1).remove();

			getPageList(totalPages, currentPage, paginationSize).forEach(item => {
				$("<li>").addClass("page-item").addClass(item ? "current-page" : "dots").toggleClass("active", item === currentPage).append($ ("<a>").addClass("page-link")
				.attr({href: "javascript:void(0)"}).text(item || "...")).insertBefore(".next-page");
			});

			$(".previous-page").toggleClass("disable", currentPage === 1);
			$(".next-page").toggleClass("disable", currentPage === totalPages);
			return true;
		}

		$(".pagination").append(
			$("<li>").addClass("page-items").addClass("previous-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("Prev")),
			$("<li>").addClass("page-items").addClass("next-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("Next")),
		);

		$(".box-content").show();
		showPage(1);

		$(document).on("click", ".pagination li.current-page:not(.active)", function(){
			return showPage(+$(this).text());
		});

		$(".next-page").on("click", function(){
			return showPage(currentPage + 1);

		});

		$(".previous-page").on("click", function(){
			return showPage(currentPage - 1);

		});


	});




	// Dropdown Menu
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
	}
	
	function filterFunction() {
	var input, filter, ul, li, a, i;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	div = document.getElementById("myDropdown");
	a = div.getElementsByTagName("a");
	for (i = 0; i < a.length; i++) {
		txtValue = a[i].textContent || a[i].innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
		a[i].style.display = "";
		} else {
		a[i].style.display = "none";
		}
	}
	};







	