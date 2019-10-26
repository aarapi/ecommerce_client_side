package org.al.ecommerce.utilities;

public class PageNumberSearch {
    private int pageNumber;
    private String inputSearch;

    public PageNumberSearch(int pageNumber, String inputSearch) {
        this.pageNumber = pageNumber;
        this.inputSearch = inputSearch;
    }

    public int getPageNumber() {
        return pageNumber;
    }

    public void setPageNumber(int pageNumber) {
        this.pageNumber = pageNumber;
    }

    public String getInputSearch() {
        return inputSearch;
    }

    public void setInputSearch(String inputSearch) {
        this.inputSearch = inputSearch;
    }
}
