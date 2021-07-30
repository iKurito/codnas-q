package codnas.q.service.core.model;

import java.util.Objects;

public class Perm {
    private String val1;
    private String val2;

    public Perm(){

    }

    public Perm(String val1, String val2) {
        this.val1 = val1;
        this.val2 = val2;
    }

    public String getVal1() {
        return val1;
    }

    public void setVal1(String val1) {
        this.val1 = val1;
    }

    public String getVal2() {
        return val2;
    }

    public void setVal2(String val2) {
        this.val2 = val2;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Perm permModel = (Perm) o;
        return (Objects.equals(val1, permModel.val1) && Objects.equals(val2, permModel.val2) || Objects.equals(val1, permModel.val2) && Objects.equals(val2, permModel.val1));
    }

    @Override
    public int hashCode() {
        if (Objects.hash(val1) > Objects.hash(val2)) {
            return Objects.hash(val1, val2);
        } else {
            return Objects.hash(val2, val1);
        }
    }

    @Override
    public String toString() {
        return "PermModel{" +
                "val1='" + val1 + '\'' +
                ", val2='" + val2 + '\'' +
                '}';
    }
}
