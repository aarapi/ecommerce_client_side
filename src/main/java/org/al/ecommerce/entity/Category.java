package org.al.ecommerce.entity;




public class Category {


    private int id;


    private String name;

    private String cutSlug;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCutSlug() {
        return cutSlug;
    }

    public void setCutSlug(String cutSlug) {
        this.cutSlug = cutSlug;
    }
}
