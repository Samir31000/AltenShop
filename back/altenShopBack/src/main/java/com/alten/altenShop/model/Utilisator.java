package com.alten.altenShop.model;

public class Utilisator {

    private int id;
    private String name;
    private boolean adminStatus;

    public Utilisator() {
    }

    public Utilisator(int id, String name, boolean adminStatus) {
        this.id = id;
        this.name = name;
        this.adminStatus = adminStatus;
    }

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

    public boolean isAdminStatus() {
        return adminStatus;
    }

    public void setAdminStatus(boolean adminStatus) {
        this.adminStatus = adminStatus;
    }
}