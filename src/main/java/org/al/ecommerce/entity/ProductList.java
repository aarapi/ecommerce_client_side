package org.al.ecommerce.entity;

public class ProductList {
    private int offset;
    private int pageNumber;

    public ProductList(int offset, int pageNumber) {
        this.offset = offset;
        this.pageNumber = pageNumber;
    }

    public int getOffset() {
        return offset;
    }

    public void setOffset(int offset) {
        this.offset = offset;
    }

    public int getPageNumber() {
        return pageNumber;
    }

    public void setPageNumber(int pageNumber) {
        this.pageNumber = pageNumber;
    }
}
